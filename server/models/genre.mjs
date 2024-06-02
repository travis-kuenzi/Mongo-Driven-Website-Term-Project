import { default as mongoose } from "mongoose";
const Schema = mongoose.Schema;

let GenreSchema = new Schema({
    //TODO: 
    // fix relationship and detail below
    name: {type: String, required: true},
    description: {type: String},
    history: {type: String},
    imageUri: {type: String}
  });

  import { default as Song } from "./song.mjs";
  GenreSchema.virtual("songs").get(async function () {
    let songArray = await Song.find().where("genre").equals(this._id).exec();
    return songArray;
  });


  import { default as Instrument } from "./instrument.mjs";
  GenreSchema.virtual("instruments").get(async function () {
    // 'this._id' refers to the current genre's ID
    let instrumentArray = await Instrument.find({ genres: { $in: [this._id] } }).exec();
    return instrumentArray;
  });
  

  
 
//virtual below: 
  //BEWARE if there is "s"
  //BEWARE if there is "s"
GenreSchema.virtual("url").get(function () {
    return "/genre/" + this._id + "/";
});

GenreSchema.virtual("instruments").get(async function () {
    let instrumentArray = await Instrument.find().where("genre").equals(this._id).exec();
    return instrumentArray;
});

GenreSchema.set('toJSON', { virtuals: true });
GenreSchema.set('toObject', { virtuals: true });

export default mongoose.model('Genre', GenreSchema);