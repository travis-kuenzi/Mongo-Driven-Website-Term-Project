import { default as mongoose } from "mongoose";
const Schema = mongoose.Schema;

let SongSchema = new Schema({
    name: { type: String, required: true },
    soundClipUri: String,
    //TODO: Musician attribute
    // Musician: Musician{ type: Schema.Types.ObjectId, ref: "Musician"},

    //TODO: Genre attribute
    // Genre: Genre{ type: Schema.Types.ObjectId, ref: "Genre"},

    //TODO: Instrument attribute
    // Instrument: Instrument{ type: Schema.Types.ObjectId, ref: "Instrument"},
    videoUri: String
  });

 
// TODO: Virtuals
// *

export default mongoose.model('Song', SongSchema); 