import * as routeHelper from '../routes/routeHelpers.mjs';

//Use express-validator to remove harmful content
//import { default as validator } from 'express-validator';

import { default as mongoose } from "mongoose";
import { default as Instrument } from '../models/instrument.mjs';
import { default as Genre } from '../models/genre.mjs';
import { default as Musician } from '../models/musician.mjs';

async function instrumentList(req, res, next) {
    try {
        console.log('InstrumentList called');
        let instruments = await Instrument.find().exec();
        res.render('Instruments.ejs', {
            title: 'Instruments',
            instruments: instruments,
        });
    } catch (err) {
        console.error('Error in InstrumentList:', err);
        next(err);
    }
}

async function instrumentById(req, res, next) {
    try {
        console.log('instrumentById called with id:', req.params.id);
        const instrumentId = req.params.id;
        console.log(instrumentId);
        //populate genre too!!!
        let instrument = await Instrument.findById(instrumentId)
        .populate("genres")
        .exec();

        res.render("singleInstrument.ejs", {instrument: instrument});
    } catch (error) {
        console.error(error.message);
    }
}

async function createInstrumentForm(req, res, next) {
    try {
        console.log('createInstrumentForm called');
        let instrument = new Instrument({});
        res.render('instrumentForm.ejs', {
            title: 'Create Instrument',
            instrument: instrument,
        });
    } catch (err) {
        console.error('Error in createInstrumentForm:', err);
        next(err);
    }
}

async function createInstrument(req, res, next) {
    try {
        console.log('createInstrument called with data:', req.body);
        let instrument = new Instrument({
            name: req.body.name,
            history: req.body.history,
            family: req.body.family,
            soundClipUri: req.body.soundClipUri,
            imageUri: req.body.videoUri,
        });
        await instrument.save();
        res.redirect(instrument.url);
    } catch (err) {
        console.error('Error in createInstrument:', err);
        next(err);
    }
}

async function updateInstrumentForm(req, res, next) {
    try {
        console.log('updateInstrumentForm called with id:', req.params.id);
        let instrument = await Instrument.findById(req.params.id).exec();
        if (!instrument) {
            return res.status(404).send('Instrument not found');
        }
        res.render('instrumentForm.ejs', {
            title: `Update ${instrument.name}`,
            instrument: instrument,
        });
    } catch (err) {
        console.error('Error in updateInstrumentForm:', err);
        next(err);
    }
}

async function updateInstrument(req, res, next) {
    try {
        console.log('updateInstrument called with id:', req.params.id, 'and data:', req.body);
        let instrument = await Instrument.findById(req.params.id).exec();
        if (!instrument) {
            console.log('Instrument not found');
            return res.status(404).send('Instrument not found');
        }
        instrument.name = req.body.name;
        instrument.soundClipUri = req.body.soundClipUri;
        instrument.videoUri = req.body.videoUri;
        await instrument.save();
        res.redirect(instrument.url);
    } catch (err) {
        console.error('Error in updateInstrument:', err);
        next(err);
    }
}

async function deleteInstrument(req, res, next) {
    try {
        console.log('deleteInstrument called with id:', req.params.id);
        const instrumentId = req.params.id;
        await Instrument.findByIdAndDelete(instrumentId).exec();
        res.redirect('/instrument');
    } catch (err) {
        console.error('Error in deleteInstrument:', err);
        next(err);
    }
}

export { instrumentList, instrumentById, createInstrumentForm, createInstrument, updateInstrumentForm, updateInstrument, deleteInstrument };