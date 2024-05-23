import { default as mongoose } from "mongoose";
const Schema = mongoose.Schema;

let MusicianSchema = new Schema({
    name: { type: String, required: true },
    picture: String,
    anecdote: String,
    //I names my datatype "Song" without "s"
    //Hi Sophia!uncomment below if need this:
    // Song: Song{ type: Schema.Types.ObjectId, ref: "Song"},
    process: String
  });

 
// TODO: Virtuals
// *

export default mongoose.model('Musician', MusicianSchema); 