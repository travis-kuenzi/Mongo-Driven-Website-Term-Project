import { default as mongoose } from "mongoose";
import { default as Instrument } from '../models/instrument.mjs';
import { default as Genre } from '../models/genre.mjs';
import { default as Musician } from '../models/musician.mjs';
import { default as Song } from '../models/song.mjs';
import { errorParser } from '../routes/routeHelpers.mjs';

function ensureHttp(url) {
    if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
        return 'http://' + url;
    }
    return url;
}

async function musicianList(req, res, next) {
    try {
        let musicians = await Musician.find().exec();
        res.render('musicians.ejs', { title: 'Musicians', musicians: musicians });
    } catch (err) {
        next(err);
    }
}

async function musicianById(req, res, next) {
    try {
        const musicianId = req.params.id;
        let musician = await Musician.findById(musicianId).exec();
        if (musician) {
            let songs = await Song.find().exec(); // Fetch all songs
            res.render('singleMusician.ejs', { musician: musician, songs: songs });
        } else {
            next();
        }
    } catch (err) {
        next(err);
    }
}

async function createMusician(req, res, next) {
    try {
        let musician = new Musician({});
        let songs = await Song.find().exec(); 
        res.render("musicianForm.ejs", { title: "Create Musician", musician: musician, songs: songs, creatingNew: { new: true }, errors: [] });
    } catch (err) {
        next(err);
    }
}

async function update_get(req, res, next) {
    try {
        let musician = await Musician.findById(req.params.id).exec();
        let songs = await Song.find().exec();
        res.render("musicianForm.ejs", { title: `Update ${musician.name}`, musician: musician, songs: songs, creatingNew: { new: false }, errors: [] });
    } catch (err) {
        next(err);
    }
}

async function update_post(req, res, next) {
    try {
        let musician = await Musician.findById(req.params.id).exec();
        if (musician === null) {
            musician = new Musician({ _id: req.body.id });
        }
        musician.name = req.body.name;
        musician.imageUri = ensureHttp(req.body.imageUri);
        musician.anecdote = req.body.anecdote;
        musician.processVideoUri = ensureHttp(req.body.processVideoUri); 
        musician.songs = req.body.songs.split(','); 
        musician.save()
            .then(() => res.redirect(musician.url))
            .catch(async (err) => {
                let songs = await Song.find().exec(); 
                res.render("musicianForm.ejs", { title: `Update ${musician.name}`, musician: musician, songs: songs, creatingNew: { new: false }, errors: errorParser(err.message) });
            });
    } catch (err) {
        next(err);
    }
}

async function deleteMusician(req, res, next) {
    try {
        const musicianId = req.params.id;
        await Instrument.updateMany({ musician: musicianId }, { $unset: { musician: 1 } }).exec();
        await Song.updateMany({ musician: musicianId }, { $unset: { musician: 1 } }).exec();
        await Musician.findByIdAndDelete(musicianId).exec();
        res.redirect('/musician');
    } catch (err) {
        next(err);
    }
}

async function verifyDelete(req, res, next) {
    try {
        const musicianId = req.params.id;
        let musician = await Musician.findById(musicianId).exec();
        res.render('verifyDeleteForm', { title: 'Verify Musician Delete', object: musician, objectType: { type: 'musician' } });
    } catch (err) {
        next(err);
    }
}

export { musicianList, musicianById, createMusician, deleteMusician, update_get, update_post, verifyDelete };