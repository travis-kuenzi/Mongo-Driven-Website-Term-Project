//import * as routeHelper from '../routes/routeHelpers.mjs';

//Use express-validator to remove harmful content
//import { default as validator } from 'express-validator';

import { default as Musician } from '../models/Musician.mjs';

async function musicianList(req, res, next) {
    try {
        let musicians = await Musician.find().exec();
        const data = musicians;

        res.render("musicians.ejs", {
            title: "musicians",
            musicians: data
        });
    } catch (err) {
        next(err);
    }
};

async function musicianById(req, res, next) {
    try {
        const musicianId = req.params.id;
        let musician = await Musician.findById(musicianId);
        if (musician) {
            res.render("singleMusician.ejs", {
                title: `${musician.name}`,
                musician: musician
            });
        }  
        else
            next();
    } catch (err) {
        next(err);
    }
};


/* async function createmusician(req, res, next) {
    try {
        let musician = new musician({});
        
        res.render("musicianForm.ejs", {
            title: "Create musician",
            musician: musician,
        });
    } catch (err) {
        next(err);
    }
}; */

/* async function update_get(req, res, next) {
    try {
      let musician = await musician.findById(req.params.id).exec();
  
      res.render("musicianForm.ejs", {
        title: `Update ${musician.name}`,
        musician: musician,
      });
    } catch (err) {
      next(err);
    }
  }; */

/* const update_post = [
    async function (req, res, next) {
        try {
            let musician = await musician.findById(req.params.id).exec();

            if (musician === null)
                musician = new musician({
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
            musician.name = req.body.name;
            musician.location = req.body.location;
            musician.nightlyCost = req.body.nightlyCost;
            musician.cleaningFee = req.body.cleaningFee;
            musician.numGuests = req.body.numGuests;
            musician.type = req.body.type;
            musician.amenities = amenitiesList;
            musician.rating = req.body.rating;

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
            next(err);
        }
    }
] */

export { musicianList, musicianById }