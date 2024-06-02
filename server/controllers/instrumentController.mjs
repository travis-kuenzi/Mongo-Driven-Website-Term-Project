//import * as routeHelper from '../routes/routeHelpers.mjs';

//Use express-validator to remove harmful content
//import { default as validator } from 'express-validator';

import { default as Instrument } from '../models/instrument.mjs';

async function instrumentList(req, res, next) {
    try {
        let instruments = await Instrument.find().exec();
        const data = instruments;

        res.render("instruments.ejs", {
            title: "instruments",
            instruments: data
        });
    } catch (err) {
        next(err);
    }
};

async function instrumentById(req, res, next) {
    try {
        const instrumentId = req.params.id;
        let instrument = await Instrument.findById(instrumentId)
            .populate("genres")
            .exec();

        let songs = await instrument.songs;

        res.render("singleInstrument.ejs", { instrument: instrument, songs: songs });
    } catch (err) {
        next(err);
    }
};

/* async function createinstrument(req, res, next) {
    try {
        let instrument = new instrument({});
        
        res.render("instrumentForm.ejs", {
            title: "Create instrument",
            instrument: instrument,
        });
    } catch (err) {
        next(err);
    }
};
 */
/* async function update_get(req, res, next) {
    try {
      let instrument = await instrument.findById(req.params.id).exec();
  
      res.render("instrumentForm.ejs", {
        title: `Update ${instrument.name}`,
        instrument: instrument,
      });
    } catch (err) {
      next(err);
    }
  }; */

/* const update_post = [
    async function (req, res, next) {
        try {
            let instrument = await instrument.findById(req.params.id).exec();

            if (instrument === null)
                instrument = new instrument({
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
            instrument.name = req.body.name;
            instrument.location = req.body.location;
            instrument.nightlyCost = req.body.nightlyCost;
            instrument.cleaningFee = req.body.cleaningFee;
            instrument.numGuests = req.body.numGuests;
            instrument.type = req.body.type;
            instrument.amenities = amenitiesList;
            instrument.rating = req.body.rating;

            instrument
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
                });
        } catch (err) {
            next(err);
        }
    }
] */

export {instrumentList, instrumentById}