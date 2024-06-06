/* import Musician from '../models/musician.mjs';
import Song from '../models/song.mjs';

async function musicianList(req, res, next) {
    try {
        console.log('musicianList called');
        let musicians = await Musician.find().exec();
        res.render('musicians.ejs', {
            title: 'Musicians',
            musicians: musicians,
        });
    } catch (err) {
        console.error('Error in musicianList:', err);
        next(err);
    }
}

async function musicianById(req, res, next) {
    try {
        console.log('musicianById called with id:', req.params.id);
        const musicianId = req.params.id;
        let musician = await Musician.findById(musicianId).exec();
        if (!musician) {
            return res.status(404).send('Musician not found');
        }
        let songs = await musician.songs;
        res.render('singleMusician.ejs', { musician: musician, songs: songs });
    } catch (err) {
        console.error('Error in musicianById:', err);
        next(err);
    }
}

async function createMusicianForm(req, res, next) {
    try {
        console.log('createMusicianForm called');
        let musician = new Musician({});
        res.render('musicianForm.ejs', {
            title: 'Create Musician',
            musician: musician,
        });
    } catch (err) {
        console.error('Error in createMusicianForm:', err);
        next(err);
    }
}

async function createMusician(req, res, next) {
    try {
        console.log('createMusician called with data:', req.body);
        let musician = new Musician({
            name: req.body.name,
            imageUri: req.body.imageUri,
            anecdote: req.body.anecdote,
            process: req.body.process,
        });
        await musician.save();
        res.redirect(musician.url);
    } catch (err) {
        console.error('Error in createMusician:', err);
        next(err);
    }
}

async function updateMusicianForm(req, res, next) {
    try {
        console.log('updateMusicianForm called with id:', req.params.id);
        let musician = await Musician.findById(req.params.id).exec();
        if (!musician) {
            return res.status(404).send('Musician not found');
        }
        res.render('musicianForm.ejs', {
            title: `Update ${musician.name}`,
            musician: musician,
        });
    } catch (err) {
        console.error('Error in updateMusicianForm:', err);
        next(err);
    }
}

async function updateMusician(req, res, next) {
    try {
        console.log('updateMusician called with id:', req.params.id, 'and data:', req.body);
        let musician = await Musician.findById(req.params.id).exec();
        if (!musician) {
            console.log('Musician not found');
            return res.status(404).send('Musician not found');
        }
        musician.name = req.body.name;
        musician.imageUri = req.body.imageUri;
        musician.anecdote = req.body.anecdote;
        musician.process = req.body.process;
        await musician.save();
        res.redirect(musician.url);
    } catch (err) {
        console.error('Error in updateMusician:', err);
        next(err);
    }
}

async function deleteMusician(req, res, next) {
    try {
        console.log('deleteMusician called with id:', req.params.id);
        const musicianId = req.params.id;
        await Song.updateMany({ musician: musicianId }, { $unset: { musician: 1 } }).exec();
        await Musician.findByIdAndDelete(musicianId).exec();
        res.redirect('/musician');
    } catch (err) {
        console.error('Error in deleteMusician:', err);
        next(err);
    }
}

export { musicianList, musicianById, createMusicianForm, createMusician, updateMusicianForm, updateMusician, deleteMusician }; */


import * as routeHelper from '../routes/routeHelpers.mjs';

//Use express-validator to remove harmful content
//import { default as validator } from 'express-validator';

import { default as mongoose } from "mongoose";
import { default as Instrument } from '../models/instrument.mjs';
import { default as Genre } from '../models/genre.mjs';
import { default as Musician } from '../models/musician.mjs';
import { default as Song } from '../models/song.mjs';

async function musicianList(req, res, next) {
    try {
        //console.log('musicianList called');
        let musicians = await Musician.find().exec();

        res.render('musicians.ejs', {
            title: 'musicians',
            musicians: musicians,
        });
    } catch (err) {
        //console.error('Error in musicianList:', err);
        next(err);
    }
}

async function musicianById(req, res, next) {
    try {
        //console.log('musicianById called with id:', req.params.id);
        const musicianId = req.params.id;
        let musician = await Musician.findById(musicianId).exec();
        if (musician) {
            let songs = await musician.songs;
            res.render('singlemusician.ejs', { musician: musician, songs: songs});
        }
        else
            next();
    } catch (err) {
        //console.error('Error in musicianById:', err);
        next(err);
    }
}

async function createMusician(req, res, next) {
    try {
        //console.log('createMusician called with data:', req.body);
        let musician = new Musician({});

        res.render("musicianForm.ejs", {
            musician: musician,
            creatingNew: {new: true}
        });
    } catch (err) {
        next(err);
    }
}

async function update_get(req, res, next) {
    try {
      let musician = await Musician.findById(req.params.id).exec();
  
      res.render("musicianForm.ejs", {
        title: `Update ${musician.name}`,
        musician: musician,
        creatingNew: {new: false}
      });
    } catch (err) {
      next(err);
    }
};


async function update_post(req, res, next) {
    try {
        //console.log('updateMusician called with id:', req.params.id, 'and data:', req.body);
        let musician = await Musician.findById(req.params.id).exec();
        
        if (musician === null) {
            //console.log('musician not found');
            musician = new Musician({
                _id: req.body.id
            });
        }

        musician.name = req.body.name;
        musician.imageUri = req.body.imageUri;
        musician.anecdote = req.body.anecdote;
        musician.process = req.body.process;
        
        musician
            .save()
            .then((musician) => {
                res.redirect(musician.url);
            })
            .catch((err) => {
                console.log(err.message);
                res.render("musicianForm.ejs", {
                    title: `Update ${musician.name}`,
                    musician: musician,
                    errors: routeHelper.errorParser(err.message),
                });
            });
    } catch (err) {
        console.error('Error in updateMusician:', err);
        next(err);
    }
}

async function deleteMusician(req, res, next) {
    try {
        console.log('deletemusician called with id:', req.params.id);
        
        const musicianId = req.params.id;
        await Instrument.updateMany({ musician: musicianId }, { $unset: { musician: 1 } }).exec();
        await Song.updateMany({ musician: musicianId }, { $unset: { musician: 1 } }).exec();
        await Musician.findByIdAndDelete(musicianId).exec();
        res.redirect('/musician');
    } catch (err) {
        console.error('Error in deletemusician:', err);
        next(err);
    }
}

export {musicianList, musicianById, createMusician, deleteMusician, update_get, update_post}