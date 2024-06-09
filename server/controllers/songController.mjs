import * as routeHelper from '../routes/routeHelpers.mjs';
import { default as mongoose } from "mongoose";
import { default as Instrument } from '../models/instrument.mjs';
import { default as Genre } from '../models/genre.mjs';
import { default as Musician } from '../models/musician.mjs';
import { default as Song } from '../models/song.mjs';
import { errorParser } from '../routes/routeHelpers.mjs'; // Import errorParser

async function songList(req, res, next) {
    try {
        let songs = await Song.find().exec();
        res.render('songs.ejs', {
            title: 'Songs',
            songs: songs,
        });
    } catch (err) {
        next(err);
    }
}

async function songById(req, res, next) {
    try {
        const songId = req.params.id;
        let song = await Song.findById(songId)
            .populate("musician")
            .populate("genre")
            .populate("instruments")
            .exec();

        if (song) {
            res.render('singleSong.ejs', { song: song });
        } else {
            next();
        }
    } catch (err) {
        next(err);
    }
}

async function createSong(req, res, next) {
    try {
        const instruments = await Instrument.find();
        const musicians = await Musician.find();
        const genres = await Genre.find();

        res.render("songForm.ejs", {
            song: {},
            instruments: instruments,
            musicians: musicians,
            genres: genres,
            creatingNew: { new: true }
        });
    } catch (err) {
        next(err);
    }
}

async function create_post(req, res, next) {
    try {
        const songData = {
            name: req.body.name,
            genre: req.body.genre,
            musician: req.body.musician,
            instruments: req.body.instruments,
            soundClipUri: req.body.soundClipUri,
            videoUri: req.body.videoUri,
        };

        const song = new Song(songData);
        await song.save();

        res.redirect('/song/' + song._id);
    } catch (err) {
        const instruments = await Instrument.find();
        const musicians = await Musician.find();
        const genres = await Genre.find();

        res.render("songForm.ejs", {
            title: 'Create Song',
            song: req.body,
            instruments: instruments,
            musicians: musicians,
            genres: genres,
            creatingNew: { new: true },
            errors: errorParser(err.message)
        });
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
            creatingNew: { new: false }
        });
    } catch (err) {
        next(err);
    }
}

async function update_post(req, res, next) {
    try {
        const songData = {
            name: req.body.name,
            genre: req.body.genre,
            musician: req.body.musician,
            instruments: req.body.instruments,
            soundClipUri: req.body.soundClipUri,
            videoUri: req.body.videoUri,
        };

        let song = await Song.findByIdAndUpdate(req.params.id, songData, { new: true, runValidators: true });

        if (!song) {
            return res.status(404).send("Song not found");
        }

        res.redirect('/song/' + song._id);
    } catch (err) {
        const instruments = await Instrument.find();
        const musicians = await Musician.find();
        const genres = await Genre.find();

        res.render("songForm.ejs", {
            title: `Update ${req.body.name}`,
            song: req.body,
            instruments: instruments,
            musicians: musicians,
            genres: genres,
            creatingNew: { new: false },
            errors: errorParser(err.message)
        });
    }
}

async function deleteSong(req, res, next) {
    try {
        const songId = req.params.id;
        await Song.updateMany({ song: songId }, { $unset: { song: 1 } }).exec();
        await Song.findByIdAndDelete(songId).exec();
        res.redirect('/song');
    } catch (err) {
        console.error('Error in deleteSong:', err);
        next(err);
    }
}

async function verifyDelete(req, res, next) {
    try {
        const songId = req.params.id;
        let song = await Song.findById(songId).exec();

        res.render('verifyDeleteForm', {
            title: 'verifySongDelete',
            object: song,
            objectType: { type: 'song' }
        });
    } catch (err) {
        next(err);
    }
}

export { songList, songById, createSong, create_post, deleteSong, update_get, update_post, verifyDelete };