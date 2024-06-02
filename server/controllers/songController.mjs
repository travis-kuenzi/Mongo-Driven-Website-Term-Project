import * as routeHelper from '../routes/routeHelpers.mjs';

//Use express-validator to remove harmful content
//import { default as validator } from 'express-validator';

import { default as mongoose } from "mongoose";
import { default as Song } from '../models/song.mjs';
import { default as Genre } from '../models/genre.mjs';
import { default as Musician } from '../models/musician.mjs';
import { default as Instrument } from '../models/instrument.mjs';


async function songList(req, res, next) {
    try {
        console.log('songList called');
        let songs = await Song.find().exec();
        res.render('songs.ejs', {
            title: 'Songs',
            songs: songs,
        });
    } catch (err) {
        console.error('Error in songList:', err);
        next(err);
    }
}

async function songById(req, res, next) {
    try {
        console.log('songById called with id:', req.params.id);
        const songId = req.params.id;
        console.log(songId);
        // populate musician as well, turned off temporarily!!!!
        //populate genre too!!!
        let song = await Song.findById(songId)
        .populate("genre")
        .populate("musician")
        .populate("instruments")
        .exec();

        res.render("singleSong.ejs", {song: song});
    } catch (error) {
        console.error(error.message);
    }
}

async function createSongForm(req, res, next) {
    try {
        console.log('createSongForm called');
        let song = new Song({});
        res.render('songForm.ejs', {
            title: 'Create Song',
            song: song,
        });
    } catch (err) {
        console.error('Error in createSongForm:', err);
        next(err);
    }
}

async function createSong(req, res, next) {
    try {
        console.log('createSong called with data:', req.body);
        let song = new Song({
            name: req.body.name,
            soundClipUri: req.body.soundClipUri,
            videoUri: req.body.videoUri,
        });
        await song.save();
        res.redirect(song.url);
    } catch (err) {
        console.error('Error in createSong:', err);
        next(err);
    }
}

async function updateSongForm(req, res, next) {
    try {
        console.log('updateSongForm called with id:', req.params.id);
        let song = await Song.findById(req.params.id).exec();
        if (!song) {
            return res.status(404).send('Song not found');
        }
        res.render('songForm.ejs', {
            title: `Update ${song.name}`,
            song: song,
        });
    } catch (err) {
        console.error('Error in updateSongForm:', err);
        next(err);
    }
}

async function updateSong(req, res, next) {
    try {
        console.log('updateSong called with id:', req.params.id, 'and data:', req.body);
        let song = await Song.findById(req.params.id).exec();
        if (!song) {
            console.log('Song not found');
            return res.status(404).send('Song not found');
        }
        song.name = req.body.name;
        song.soundClipUri = req.body.soundClipUri;
        song.videoUri = req.body.videoUri;
        await song.save();
        res.redirect(song.url);
    } catch (err) {
        console.error('Error in updateSong:', err);
        next(err);
    }
}

async function deleteSong(req, res, next) {
    try {
        console.log('deleteSong called with id:', req.params.id);
        const songId = req.params.id;
        await Song.findByIdAndDelete(songId).exec();
        res.redirect('/song');
    } catch (err) {
        console.error('Error in deleteSong:', err);
        next(err);
    }
}

export { songList, songById, createSongForm, createSong, updateSongForm, updateSong, deleteSong };