import { default as mongoose } from "mongoose";
const Schema = mongoose.Schema;

let GenreSchema = new Schema({
    name: {type: String},
    description: String,
    //TODO: song attribute
    // Song: Song{ type: Schema.Types.ObjectId, ref: "Song"},
    history: String,
    image: String
  });

 
// TODO: Virtuals
// *

export default mongoose.model('Genre', GenreSchema); 