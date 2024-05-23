// Connect to DB with Mongoose
import { default as credentials } from "./dbCredentials.mjs";
import { default as mongoose } from "mongoose";
mongoose.connect(credentials.connection_string);

// Define the schemas
let GenreSchema = new mongoose.Schema({
  name: String,
  description: String,
  history: String,
  image: String
});

let MusicianSchema = new mongoose.Schema({
  name: String,
  picture: String,
  anecdote: String,
  process: String
});

let InstrumentSchema = new mongoose.Schema({
  name: String,
  history: String,
  family: String,
  imageUri: String,
  soundClipUri: String
});

let SongSchema = new mongoose.Schema({
  name: String,
  soundClipUri: String,
  videoUri: String
});

// Create models from the schemas
let Genre = mongoose.model("Genre", GenreSchema);
let Musician = mongoose.model("Musician", MusicianSchema);
let Instrument = mongoose.model("Instrument", InstrumentSchema);
let Song = mongoose.model("Song", SongSchema);

// Use the models to make objects
const jazz = new Genre({
  name: "Jazz",
  description: "A genre of music that originated in the African-American communities...",
  history: "Jazz originated in the late 19th and early 20th centuries...",
  image: "jazz_image_url"
});

const johnDoe = new Musician({
  name: "John Doe",
  picture: "johndoe_picture_url",
  anecdote: "John Doe started playing guitar at the age of 5...",
  process: "John practices 4 hours a day..."
});

const guitar = new Instrument({
  name: "Guitar",
  history: "The guitar has ancient roots, dating back over 4000 years...",
  family: "String Instruments",
  imageUri: "guitar_image_url",
  soundClipUri: "guitar_sound_clip_url"
});

const smoothJazz = new Song({
  name: "Smooth Jazz",
  soundClipUri: "smooth_jazz_sound_clip_url",
  videoUri: "smooth_jazz_video_url"
});

// Save them to the database, receive promises
let genreSaveResult = jazz.save();
let musicianSaveResult = johnDoe.save();
let instrumentSaveResult = guitar.save();
let songSaveResult = smoothJazz.save();

// Wait until done, then disconnect
Promise.all([genreSaveResult, musicianSaveResult, instrumentSaveResult, songSaveResult])
  .then((data) => {
    console.log(data);
    mongoose.disconnect();
  })
  .catch((error) => {
    console.error(error);
    mongoose.disconnect();
  });
