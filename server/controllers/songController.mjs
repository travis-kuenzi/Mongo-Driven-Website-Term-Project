//import * as routeHelper from '../routes/routeHelpers.mjs';

//Use express-validator to remove harmful content
//import { default as validator } from 'express-validator';

import { default as Song } from '../models/Song.mjs';

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
    try {
        const songId = req.params.id;
        let song = await Song.findById(songId);
        if (song) {
            res.render("singleSong.ejs", {
                title: `${song.name}`,
                song: song
            });
        }  
        else
            next();
    } catch (err) {
        next(err);
    }
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