import { default as mongoose } from "mongoose";
const Schema = mongoose.Schema;

let MusicianSchema = new Schema({
    //TODO: 
    // fix relationship and detail below
    name: { type: String, required: true },
    picture: String,
    anecdote: String,
    // need test: song list, there are a list of song
    // Song: Song{ [type: Schema.Types.ObjectId, ref: "Song"]},
    process: String
  });

//virtual below: 
  //BEWARE if there is "s"
  //BEWARE if there is "s"
MusicianSchema.virtual("url").get(function () {
return "/musician/id/" + this._id;
});
export default mongoose.model('Musician', MusicianSchema); 