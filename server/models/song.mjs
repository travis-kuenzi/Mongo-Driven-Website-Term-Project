import { default as mongoose } from "mongoose";
const Schema = mongoose.Schema;

let SongSchema = new Schema({
  name: { type: String, required: true },
  soundClipUri: { type: String },
  //Each song has one musician
  musician: { type: Schema.Types.ObjectId, ref: "Musician" },
  //Each song has a genre
  genre: { type: Schema.Types.ObjectId, ref: "Genre" },
  //Each song has a few instruments
  instruments: [{ type: Schema.Types.ObjectId, ref: "Instrument" }],
  videoUri: { type: String }
});

//virtual below: 
//BEWARE if there is "s"
  
//BEWARE if there is "s"
  
SongSchema.virtual("url").get(function () {  
  return "/song/" + this._id + "/";
});

SongSchema.set('toJSON', { virtuals: true });
SongSchema.set('toObject', { virtuals: true });

export default mongoose.model('Song', SongSchema); 