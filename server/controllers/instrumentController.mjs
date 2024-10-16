import * as routeHelper from '../routes/routeHelpers.mjs';

//Use express-validator to remove harmful content
//import { default as validator } from 'express-validator';

import { default as mongoose } from "mongoose";
import { default as Instrument } from '../models/instrument.mjs';
import { default as Genre } from '../models/genre.mjs';
import { default as Musician } from '../models/musician.mjs';
import { default as Song } from '../models/song.mjs';

async function instrumentList(req, res, next) {
    try {
        //console.log('instrumentList called');
        let instruments = await Instrument.find().exec();

        res.render('instruments.ejs', {
            title: 'Instruments',
            instruments: instruments,
        });
    } catch (err) {
        //console.error('Error in instrumentList:', err);
        next(err);
    }
}

async function instrumentById(req, res, next) {
    try {
        //console.log('instrumentById called with id:', req.params.id);
        const instrumentId = req.params.id;
        let instrument = await Instrument.findById(instrumentId).exec();

        if (instrument) {
            let songs = await instrument.songs;
            let genres = await instrument.genres;
            res.render('singleInstrument.ejs', { instrument: instrument, songs: songs, genres: genres });
        }
        else
            res.status(404).send('404 file not found');
    } catch (err) {
        //console.error('Error in instrumentById:', err);
        next(err);
    }
}

async function instrumentSearchByName(req, res, next) {
    try {
        const searchQuery = req.query.search || ''; // Get the search query from the request query parameters

        // Search for instruments by name using a case-insensitive regular expression
        const instruments = await Instrument.find({ name: { $regex: searchQuery, $options: 'i' } }).exec();

        res.render('search-results', { title: 'Search Results', instruments, searchQuery });
    } catch (error) {
        console.error('Error searching for instruments:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function instrumentSearchByFamily(req, res, next) {
    try {
        const familyQuery = req.query.family || ''; // Get the family query from the request query parameters

        // Search for instruments by family using a case-insensitive regular expression
        const instruments = await Instrument.find({ family: { $regex: familyQuery, $options: 'i' } }).exec();

        res.render('search-results', { title: 'Search Results', instruments, familyQuery });
    } catch (error) {
        console.error('Error searching for instruments:', error);
        res.status(500).send('Internal Server Error');
    }
}


async function createInstrument(req, res, next) {
    try {
        //console.log('createinstrument called with data:', req.body);
        let instrument = new Instrument({});

        let allGenres = await Genre.find().select("name instruments").exec();
        //let genres = await Genre.find().select("name").exec();

        res.render("instrumentForm.ejs", {
            instrument: instrument,
            allGenres: allGenres,
            creatingNew: {new: true}
        });
    } catch (err) {
        next(err);
    }
}

async function update_get(req, res, next) {
    try {
      let instrument = await Instrument.findById(req.params.id).exec();
  
      //let genres = await Genre.find().select("name").exec();
      let allGenres = await Genre.find().select("name instruments").exec();

      res.render("instrumentForm.ejs", {
        title: `Update ${instrument.name}`,
        instrument: instrument,
        allGenres: allGenres,
        creatingNew: {new: false}
      });
    } catch (err) {
      next(err);
    }
};


async function update_post(req, res, next) {
    try {
        //console.log('updateInstrument called with id:', req.params.id, 'and data:', req.body);
        let instrument = await Instrument.findById(req.params.id).exec();
        if (instrument === null) {
            //console.log('instrument not found');
            instrument = new Instrument({
                _id: req.body.id
            });
        }

        instrument.name = req.body.name;
        instrument.history= req.body.history;
        instrument.family= req.body.family;
        instrument.soundSampleUri= req.body.soundSampleUri;
        instrument.imageUri= req.body.imageUri;

        await instrument.save();

        await Genre.updateMany({}, { $pull: { instruments: instrument._id } });

        const {genres} = req.body;
        if (genres && genres.length > 0) {
            const genreIds = Array.isArray(genres) ? genres : [genres];
            await Genre.updateMany(
                { _id: { $in: genreIds } },
                { $addToSet: { instruments: instrument._id } }
            );
        }

        res.redirect(instrument.url);
/*         instrument
            .save()
            .then((instrument) => {
                res.redirect(instrument.url);
            })
            .catch((err) => {
                console.log(err.message);
                res.render("instrumentForm.ejs", {
                    title: `Update ${instrument.name}`,
                    instrument: instrument,
                    errors: routeHelper.errorParser(err.message),
                });
            }); */
    } catch (err) {
        console.error('Error in updateinstrument:', err);
        next(err);
    }
}

async function deleteInstrument(req, res, next) {
    try {
        console.log('deleteinstrument called with id:', req.params.id);
        
        const instrumentId = req.params.id;
        await Song.updateMany({ instruments: instrumentId }, { $pull: { instruments: instrumentId } }).exec();
        await Genre.updateMany({ instruments: instrumentId }, { $pull: { instruments: instrumentId } }).exec();
        await Instrument.findByIdAndDelete(instrumentId).exec();
        res.redirect('/instrument');
    } catch (err) {
        console.error('Error in deleteInstrument:', err);
        next(err);
    }
}

async function verifyDelete(req, res, next) {
    try {
        //console.log('instrumentList called');
        const instrumentId = req.params.id;
        let instrument = await Instrument.findById(instrumentId).exec();

        res.render('verifyDeleteForm', {
            title: 'verifyInstrumentDelete',
            object: instrument,
            objectType: { type: 'instrument' }
        });
    } catch (err) {
        //console.error('Error in instrumentList:', err);
        next(err);
    }
}

export {instrumentList, instrumentById, instrumentSearchByName, instrumentSearchByFamily, createInstrument, deleteInstrument, update_get, update_post, verifyDelete}