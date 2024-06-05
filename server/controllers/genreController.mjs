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
            let instruments = await genre.instruments;
            res.render('singleGenre.ejs', { genre: genre, songs: songs, instruments: instruments });
        }
        else
            next();
    } catch (err) {
        //console.error('Error in genreById:', err);
        next(err);
    }
}

/* async function createGenreForm(req, res, next) {
    try {
        console.log('createGenreForm called');
        let genre = new Genre({});
        res.render('genreForm.ejs', {
            title: 'Create Genre',
            genre: genre,
        });
    } catch (err) {
        console.error('Error in createGenreForm:', err);
        next(err);
    }
}
 */
/* async function createGenre(req, res, next) {
    try {
        console.log('createGenre called with data:', req.body);
        let genre = new Genre({
            name: req.body.name,
            description: req.body.description,
            history: req.body.history,
            imageUri: req.body.imageUri,
        });
        await genre.save();
        res.redirect(genre.url);
    } catch (err) {
        console.error('Error in createGenre:', err);
        next(err);
    }
}
 */

async function createGenre(req, res, next) {
    try {
        console.log('createGenre called with data:', req.body);
        let genre = new Genre({});

        res.render("genreForm.ejs", {
            genre: genre,
            creatingNew: {new: true}
        });
    } catch (err) {
        next(err);
    }
}

/* async function updateGenreForm(req, res, next) {
    try {
        console.log('updateGenreForm called with id:', req.params.id);
        let genre = await Genre.findById(req.params.id).exec();
        if (!genre) {
            return res.status(404).send('Genre not found');
        }
        res.render('genreForm.ejs', {
            title: `Update ${genre.name}`,
            genre: genre,
        });
    } catch (err) {
        console.error('Error in updateGenreForm:', err);
        next(err);
    }
} */

async function update_get(req, res, next) {
    try {
      let genre = await Genre.findById(req.params.id).exec();
  
      res.render("genreForm.ejs", {
        title: `Update ${genre.name}`,
        genre: genre,
        creatingNew: {new: false}
      });
    } catch (err) {
      next(err);
    }
};


async function update_post(req, res, next) {
    try {
        console.log('updateGenre called with id:', req.params.id, 'and data:', req.body);
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
        await genre.save();
        
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
                    errors: routeHelper.errorParser(err.message),
                });
            });
    } catch (err) {
        console.error('Error in updateGenre:', err);
        next(err);
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

export {genreList, genreById, createGenre, deleteGenre, update_get, update_post}