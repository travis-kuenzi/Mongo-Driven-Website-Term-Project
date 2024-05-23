import { default as mongoose } from "mongoose";
const Schema = mongoose.Schema;

let SongSchema = new Schema({
    //TODO: 
    // fix relationship and detail below, refrence cs290Code/Wk7
    name: { type: String, required: true },
    soundClipUri: String,
    //TODO: Musician attribute
    // Musician: Musician{type: Schema.Types.ObjectId, ref: "Musician"},

    //TODO: Genre attribute
    // Genre: Genre{type: Schema.Types.ObjectId, ref: "Genre"},

    //TODO: Instrument attribute
    // Instrument: Instrument{[ type: Schema.Types.ObjectId, ref: "Instrument"]},
    videoUri: String
  });

 //virtual below: 
  //BEWARE if there is "s"
  //BEWARE if there is "s"
  SongSchema.virtual("url").get(function () {
    return "/song/id/" + this._id;
  });

export default mongoose.model('Song', SongSchema); 