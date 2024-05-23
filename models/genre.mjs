import { default as mongoose } from "mongoose";
const Schema = mongoose.Schema;

let GenreSchema = new Schema({
    //TODO: 
    // fix relationship and detail below
    name: {type: String},
    description: String,
    // need test: connection: song attribute
    // Song: Song{[type: Schema.Types.ObjectId, ref: "Song"]},
    history: String,
    image: String
  });

 
//virtual below: 
  //BEWARE if there is "s"
  //BEWARE if there is "s"
GenreSchema.virtual("url").get(function () {
    return "/genre/id/" + this._id;
  });

export default mongoose.model('Genre', GenreSchema); 