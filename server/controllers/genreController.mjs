//import * as routeHelper from '../routes/routeHelpers.mjs';

//Use express-validator to remove harmful content
//import { default as validator } from 'express-validator';

// Changed this back to lower case genre and fixed some issure WZ may30
import { default as Genre } from '../models/genre.mjs';

async function genreList(req, res, next) {
    try {
        let genres = await Genre.find().exec();
        const data = genres;

        res.render("genres.ejs", {
            title: "genres",
            genres: data
        });
    } catch (err) {
        next(err);
    }
};

async function genreById(req, res, next) {
    try {
        const genreId = req.params.id;
        let genre = await Genre.findById(genreId).exec();

        let songs = await genre.songs;
        let instruments = await genre.instruments;

        res.render("singleGenre.ejs", {genre: genre, songs: songs, instruments: instruments});
    } catch (err) {
        next(err);
    }
};


/* async function creategenre(req, res, next) {
    try {
        let genre = new genre({});
        
        res.render("genreForm.ejs", {
            title: "Create genre",
            genre: genre,
        });
    } catch (err) {
        next(err);
    }
}; */

/* async function update_get(req, res, next) {
    try {
      let genre = await genre.findById(req.params.id).exec();
  
      res.render("genreForm.ejs", {
        title: `Update ${genre.name}`,
        genre: genre,
      });
    } catch (err) {
      next(err);
    }
  }; */

/* const update_post = [
    async function (req, res, next) {
        try {
            let genre = await genre.findById(req.params.id).exec();

            if (genre === null)
                genre = new genre({
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
            genre.name = req.body.name;
            genre.location = req.body.location;
            genre.nightlyCost = req.body.nightlyCost;
            genre.cleaningFee = req.body.cleaningFee;
            genre.numGuests = req.body.numGuests;
            genre.type = req.body.type;
            genre.amenities = amenitiesList;
            genre.rating = req.body.rating;

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
            next(err);
        }
    }
] */

export {genreList, genreById}