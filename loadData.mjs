// Connect to DB with Mongoose
import { default as credentials } from "./dbCredentials.mjs";
import { default as mongoose } from "mongoose";
mongoose.connect(credentials.connection_string);

//load our 4 models
import { default as Song} from './models/song.mjs';
import { default as Genre} from './models/genre.mjs';
import { default as Instrument} from './models/instrument.mjs';
import { default as Musician} from './models/musician.mjs';

//load the data stored in this data.mjs file:
import { default as dataFile} from './data.mjs';

//Async functions so we can use await to synchronize steps
async function loadAllrecords(){
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

  //TODO:
  //--- Genre add multiple data

  //--- Instrument add multiple data

  //--- Musician add multiple data
 


  // TODO - a forloop that wires our 4 Datatype's relations 
  //Require Connection done in "data.mjs"
  //See below:
  // https://github.com/ChemeketaCS/cs290Code/blob/main/Week07/dataRelationSamplesCourses/addData.mjs


  // TODO 
  //  Now we are ready to save everything. Make one giant list:  
  // let allRecords = InstrumentRecords.concat(GenreRecords).concat(MusicianRecords).concat(SongRecords);
  let allRecords = SongRecords.concat();
  

  /*
  //Andrew's comment
  //We could loop through all records and call save on each and await results
  // one by one. But it is more efficient to start up all the saves in
  // parallel and then wait for all to finish.
  */
  //Use map to tell each record to save itself and collect resulting promises
  let promises = allRecords.map((record) => record.save());

  //Now wait for all to finish
  await Promise.all(promises);

  mongoose.disconnect();
}

//Make it happen
loadAllrecords();
