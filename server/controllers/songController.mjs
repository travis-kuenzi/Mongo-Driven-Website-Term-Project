import * as routeHelper from '../routes/routeHelpers.mjs';

//Use express-validator to remove harmful content
//import { default as validator } from 'express-validator';

import { default as mongoose } from "mongoose";
import { default as Instrument } from '../models/instrument.mjs';
import { default as Genre } from '../models/genre.mjs';
import { default as Musician } from '../models/musician.mjs';
import { default as Song } from '../models/song.mjs';

async function songList(req, res, next) {
    try {
        //console.log('songList called');
        let songs = await Song.find().exec();

        res.render('songs.ejs', {
            title: 'Songs',
            songs: songs,
        });
    } catch (err) {
        //console.error('Error in songList:', err);
        next(err);
    }
}

async function songById(req, res, next) {
    try {
        //console.log('songById called with id:', req.params.id);
        const songId = req.params.id;
        let song = await Song.findById(songId)
            .populate("musician")
            .populate("genre")
            .populate("instruments")
            .exec();

        if (song) {
            res.render('singleSong.ejs', { song: song });
        }
        else
            next();
    } catch (err) {
        //console.error('Error in songById:', err);
        next(err);
    }
}

async function createSong(req, res, next) {
    try {
        //console.log('createsong called with data:', req.body);
        let song = new Song({});

        const instruments = await Instrument.find();
        const musicians = await Musician.find();
        const genres = await Genre.find();

        res.render("songForm.ejs", {
            song: song,
            instruments: instruments,
            musicians: musicians,
            genres: genres,
            creatingNew: {new: true}
        });
    } catch (err) {
        next(err);
    }
}

async function update_get(req, res, next) {
    try {
      let song = await Song.findById(req.params.id).exec();
    
      const instruments = await Instrument.find();
      const musicians = await Musician.find();
      const genres = await Genre.find();

      res.render("songForm.ejs", {
        title: `Update ${song.name}`,
        song: song,
        instruments: instruments,
        musicians: musicians,
        genres: genres,
        creatingNew: {new: false}
      });
    } catch (err) {
      next(err);
    }
};


async function update_post(req, res, next) {
    try {
        //console.log('updatesong called with id:', req.params.id, 'and data:', req.body);
        let song = await Song.findById(req.params.id).exec();
        if (song === null) {
            //console.log('song not found');
            song = new Song({
                _id: req.body.id
            });
        }

        song.name = req.body.name;
        song.soundClipUri= req.body.soundClipUri;
        song.videoUri= req.body.videoUri;
        song.genre = req.body.genre;
        song.musician = req.body.musician;
        song.instruments = req.body.instruments;

        song
            .save()
            .then((song) => {
                res.redirect(song.url);
            })
            .catch((err) => {
                console.log(err.message);
                res.render("songForm.ejs", {
                    title: `Update ${song.name}`,
                    song: song,
                    errors: routeHelper.errorParser(err.message),
                });
            });
    } catch (err) {
        console.error('Error in updatesong:', err);
        next(err);
    }
}

async function deleteSong(req, res, next) {
    try {
        //console.log('deletesong called with id:', req.params.id);
        
        const songId = req.params.id;
        await Song.updateMany({ song: songId }, { $unset: { song: 1 } }).exec();
        await Song.updateMany({ song: songId }, { $unset: { song: 1 } }).exec();
        await Song.findByIdAndDelete(songId).exec();
        res.redirect('/song');
    } catch (err) {
        console.error('Error in deletesong:', err);
        next(err);
    }
}

async function verifyDelete(req, res, next) {
    try {
        //console.log('songList called');
        const songId = req.params.id;
        let song = await Song.findById(songId).exec();

        res.render('verifyDeleteForm', {
            title: 'verifySongDelete',
            object: song,
            objectType: { type: 'song' }
        });
    } catch (err) {
        //console.error('Error in songList:', err);
        next(err);
    }
}

export {songList, songById, createSong, deleteSong, update_get, update_post, verifyDelete}