import * as routeHelper from '../routes/routeHelpers.mjs';

//Use express-validator to remove harmful content
//import { default as validator } from 'express-validator';

import { default as mongoose } from "mongoose";
import { default as Instrument } from '../models/instrument.mjs';
import { default as Genre } from '../models/genre.mjs';
import { default as Musician } from '../models/musician.mjs';
import { default as Song } from '../models/song.mjs';

async function genreList(req, res, next) {
    try {
        //console.log('genreList called');
        let genres = await Genre.find().exec();

        res.render('genres.ejs', {
            title: 'Genres',
            genres: genres,
        });
    } catch (err) {
        //console.error('Error in genreList:', err);
        next(err);
    }
}

async function genreById(req, res, next) {
    try {
        console.log('genreById called with id:', req.params.id);
        const genreId = req.params.id;
        let genre = await Genre.findById(genreId).exec();
        if (genre) {
            let songs = await genre.songs;
            await genre.populate('instruments');
            let instruments = genre.instruments;
            console.log("in genreById, instruments:", instruments)

            res.render('singleGenre.ejs', { genre: genre, songs: songs, instruments: instruments });
        }
        else
            next();
    } catch (err) {
        //console.error('Error in genreById:', err);
        next(err);
    }
}

async function createGenre(req, res, next) {
    try {
        let genre = new Genre({});

        const instruments = await Instrument.find();

        //console.log('createGenre creates instruments list:', instruments);

        res.render("genreForm.ejs", {
            genre: genre, instruments: instruments,
            creatingNew: { new: true }
        });
    } catch (err) {
        next(err);
    }
}

async function update_get(req, res, next) {
    try {
        let genre = await Genre.findById(req.params.id).exec();

        const instruments = await Instrument.find();

        res.render("genreForm.ejs", {
            title: `Update ${genre.name}`,
            genre: genre, instruments: instruments,
            creatingNew: { new: false }
        });
    } catch (err) {
        next(err);
    }
};


async function update_post(req, res, next) {
    try {
        //console.log('updateGenre called with id:', req.params.id, 'and data:', req.body);
        let genre = await Genre.findById(req.params.id).exec();
        if (genre === null) {
            //console.log('Genre not found');
            genre = new Genre({
                _id: req.body.id
            });
        }

        genre.name = req.body.name;
        genre.description = req.body.description;
        genre.history = req.body.history;
        genre.imageUri = req.body.imageUri;
        genre.instruments = req.body.instruments;

        genre
            .save()
            .then((genre) => {
                res.redirect(genre.url);
            })
            .catch((err) => {
                console.log(err.message);
                res.render("genreForm.ejs", {
                    title: `Update ${genre.name}`,
                    genre: genre,
                    instruments: genre.instruments,
                    errors: routeHelper.errorParser(err.message),
                });
            });
    } catch (err) {
        console.error('Error in updateGenre:', err);

        // Render the form again with error messages if there was an error
        res.render("genreForm.ejs", {
            title: `Update ${req.body.name}`,
            genre: genre,
            errors: routeHelper.errorParser(err.message),
        });
    }

}

async function deleteGenre(req, res, next) {
    try {
        console.log('deleteGenre called with id:', req.params.id);

        const genreId = req.params.id;
        await Instrument.updateMany({ genre: genreId }, { $unset: { genre: 1 } }).exec();
        await Song.updateMany({ genre: genreId }, { $unset: { genre: 1 } }).exec();
        await Genre.findByIdAndDelete(genreId).exec();
        res.redirect('/genre');
    } catch (err) {
        console.error('Error in deleteGenre:', err);
        next(err);
    }
}

async function verifyDelete(req, res, next) {
    try {
        //console.log('genreList called');
        const genreId = req.params.id;
        let genre = await Genre.findById(genreId).exec();

        res.render('verifyDeleteForm', {
            title: 'verifyGenreDelete',
            object: genre,
            objectType: { type: 'genre' }
        });
    } catch (err) {
        console.error('Error in genreList:', err);
        next(err);
    }
}

export { genreList, genreById, createGenre, deleteGenre, update_get, update_post, verifyDelete }