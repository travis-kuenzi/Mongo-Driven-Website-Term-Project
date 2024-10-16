// Connect to DB with Mongoose
import { default as credentials } from "./dbCredentials.mjs";
import { default as mongoose } from "mongoose";
//await mongoose.connect(credentials.connection_string);

//load our 4 models
import { default as Song} from './models/song.mjs';
import { default as Genre} from './models/genre.mjs';
import { default as Instrument} from './models/instrument.mjs';
import { default as Musician} from './models/musician.mjs';

//load the data stored in this data.mjs file:
import { default as dataFile} from './data.mjs';

// MongoDB connection string

//Async functions so we can use await to synchronize steps
async function loadAllrecords(){
  const mongoDB = credentials.connection_string;
  await mongoose.connect(mongoDB);
  
  //delete all existing records
  await Song.deleteMany();
  await Genre.deleteMany();
  await Instrument.deleteMany();
  await Musician.deleteMany();

  //--- Song add multiple data
  //Make all the song objects and store into an array
  const SongRecords = [];

  //For each song record in the data file
  for (let item of dataFile.SongList) {
    //Make an object
    const record = new Song(item);
    //Add it to a list
    SongRecords.push(record);
    //Don't save yet...
  }

  console.log("Done loading Songs:");
  console.log(SongRecords);

  //--- Genre add multiple data
  const GenreRecords = [];
  for (let genre of dataFile.GenreList) {
    const record = new Genre(genre);
    GenreRecords.push(record);
  }

  console.log("Done loading Genres:");
  console.log(GenreRecords);

  //--- Instrument add multiple data
  const InstrumentRecords = [];
  for (let instrument of dataFile.InstrumentList) {
    const record = new Instrument(instrument);
    InstrumentRecords.push(record);
  }

  console.log("Done loading Instruments:");
  console.log(InstrumentRecords);

  //--- Musician add multiple data
  const MusicianRecords = [];
  for (let musician of dataFile.MusicianList) {
    const record = new Musician(musician);
    MusicianRecords.push(record);
  }
  console.log("Done loading Musicians:");
  console.log(MusicianRecords);


  // TODO - a forloop that wires our 4 Datatype's relations 

    // Wire relations
    for (let relation of dataFile.songGenreRelation) {
      SongRecords[relation.SongIndex].genre = GenreRecords[relation.GenreIndex]._id;
    }

    // 1 song to one musician.
    for (let relation of dataFile.songMusicianRelation) {
      SongRecords[relation.SongIndex].musician = MusicianRecords[relation.MusicianIndex]._id;
    }
  
  // Wire song-instrument relations (one-to-many)
  for (let relation of dataFile.songInstrumentRelation) {
    // a song accept array of instruments
    for (let instrumentIndex of relation.InstrumentIndex) {
      SongRecords[relation.SongIndex].instruments.push(InstrumentRecords[instrumentIndex]._id);
    }
  }


  
  // Wire genre-instrument relations (many-to-many)
  for (let relation of dataFile.genreInstrumentRelation) {
    // load that index from there, push its value in according genre.
    for (let instrumentIndex of relation.InstrumentIndex) {
      GenreRecords[relation.GenreIndex].instruments.push(InstrumentRecords[instrumentIndex]._id);
      }
  }
      
      // for (let relation of dataFile.genreInstrumentRelation) {
      //   GenreRecords[relation.GenreIndex].instruments = InstrumentRecords[relation.InstrumentIndex]._id;
      // }
 



  let allRecords = InstrumentRecords.concat(GenreRecords).concat(MusicianRecords).concat(SongRecords);
  
  //Use map to tell each record to save itself and collect resulting promises
  let promises = allRecords.map((record) => record.save());

  //Now wait for all to finish
  await Promise.all(promises);

  mongoose.disconnect();
}

//Make it happen
loadAllrecords().catch(err => {
  console.error('Error loading records:', err);
  mongoose.disconnect();
});
