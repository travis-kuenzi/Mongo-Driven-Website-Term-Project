// Connect to DB with Mongoose
import { default as credentials } from "./dbCredentials.mjs";
import { default as mongoose } from "mongoose";
mongoose.connect(credentials.connection_string);

// Define the schemas
const GenreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  history: String,
  image: String
});

// const MusicianSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   picture: String,
//   anecdote: String,
//   process: String
// });

// const InstrumentSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   history: String,
//   family: String,
//   imageUri: String,
//   soundClipUri: String
// });

// const SongSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   soundClipUri: String,
//   videoUri: String
// });

// Create models from the schemas
const Genre = mongoose.model("Genre", GenreSchema);
// const Musician = mongoose.model("Musician", MusicianSchema);
// const Instrument = mongoose.model("Instrument", InstrumentSchema);
// const Song = mongoose.model("Song", SongSchema);

// Get all genres - returns a promise
let genres = Genre.find().exec();

// Wait for promise to resolve
genres.then((data) => {
  // Print result
  console.log(data);
  if (data.length > 0) {
    console.log("First genre's name is:", data[0].name);
  }
  // Close DB connection, allow script to end
  mongoose.disconnect();
});

// // Get all musicians - returns a promise
// let musicians = Musician.find().exec();

// // Wait for promise to resolve
// musicians.then((data) => {
//   // Print result
//   console.log(data);
//   if (data.length > 0) {
//     console.log("First musician's name is:", data[0].name);
//   }
//   // Close DB connection, allow script to end
//   mongoose.disconnect();
// });

// // Get all instruments - returns a promise
// let instruments = Instrument.find().exec();

// // Wait for promise to resolve
// instruments.then((data) => {
//   // Print result
//   console.log(data);
//   if (data.length > 0) {
//     console.log("First instrument's name is:", data[0].name);
//   }
//   // Close DB connection, allow script to end
//   mongoose.disconnect();
// });

// // Get all songs - returns a promise
// let songs = Song.find().exec();

// // Wait for promise to resolve
// songs.then((data) => {
//   // Print result
//   console.log(data);
//   if (data.length > 0) {
//     console.log("First song's name is:", data[0].name);
//   }
//   // Close DB connection, allow script to end
//   mongoose.disconnect();
// });
