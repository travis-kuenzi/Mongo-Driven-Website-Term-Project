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
        let songs = await Song.find().exec();
        const data = songs;

        res.render("songs.ejs", {
            title: "songs",
            songs: data
        });
    } catch (err) {
        next(err);
    }
};

async function songById(req, res, next) {
    //In song case, song tracks 3 other relationship within song object.
    try {
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

        // if there is no object at all, blew up.
/*         if (!song) {
            return res.status(404).send('Song not found');
        }

        // if song has genre, find it by id
        let genre = null;
        if (song.genre) {
            genre = await Genre.findById(song.genre).exec();
        }

        // if song has musician, find it by id
        let musician = null;
        if (song.musician) {
            musician = await Musician.findById(song.musician).exec();
        }
        
        // in song case instruments are an array of object
        const instruments = await Instrument.find({
            // if song has a list of instruments , find them by id
            _id: { $in: song.instruments }
        }).exec();

        //render each
        //if nothing is there render null.
        res.render("singleSong.ejs", {
            title: `${song.name}`,
            song: song,
            genre: genre,
            musician: musician,
            // in song case instruments are an array of object
            instruments: instruments 
        });
    } catch (err) {
        next(err);
    } */
};


/* async function createsong(req, res, next) {
    try {
        let song = new song({});
        
        res.render("songForm.ejs", {
            title: "Create song",
            song: song,
        });
    } catch (err) {
        next(err);
    }
};
 */
/* async function update_get(req, res, next) {
    try {
      let song = await song.findById(req.params.id).exec();
  
      res.render("songForm.ejs", {
        title: `Update ${song.name}`,
        song: song,
      });
    } catch (err) {
      next(err);
    }
  }; */

/* const update_post = [
    async function (req, res, next) {
        try {
            let song = await song.findById(req.params.id).exec();

            if (song === null)
                song = new song({
                    _id: req.body.id,
            })
            
           
            let amenitiesStrings = req.body.amenities.split("\n");
            let amenitiesList = [];
            for (let amenitiesString of amenitiesStrings) {
                amenitiesString = amenitiesString.trim();
                if (amenitiesString !== "")
                    amenitiesList.push(amenitiesString);
            }

            //replace the data
            song.name = req.body.name;
            song.location = req.body.location;
            song.nightlyCost = req.body.nightlyCost;
            song.cleaningFee = req.body.cleaningFee;
            song.numGuests = req.body.numGuests;
            song.type = req.body.type;
            song.amenities = amenitiesList;
            song.rating = req.body.rating;

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
            next(err);
        }
    }
] */

export {songList, songById}