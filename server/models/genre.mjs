import { default as mongoose } from "mongoose";
const Schema = mongoose.Schema;

let GenreSchema = new Schema({
    //TODO: 
    // fix relationship and detail below
    name: {type: String, required: true},
    description: {type: String},
    songs: [{ type: Schema.Types.ObjectId, ref: "Song"}],
    history: {type: String},
    imageUri: {type: String}
  });

  TeamSchema.virtual("members").get(async function () {
    let heroArray = await Hero.find().where("team").equals(this._id).exec();
    return heroArray;
  });

  TeamSchema.virtual("members").get(async function () {
    let heroArray = await Hero.find().where("team").equals(this._id).exec();
    return heroArray;
  });

  TeamSchema.virtual("members").get(async function () {
    let heroArray = await Hero.find().where("team").equals(this._id).exec();
    return heroArray;
  });
  
 
//virtual below: 
  //BEWARE if there is "s"
  //BEWARE if there is "s"
GenreSchema.virtual("url").get(function () {
    return "/genre/" + this._id + "/";
  });

GenreSchema.set('toJSON', { virtuals: true });
GenreSchema.set('toObject', { virtuals: true });

export default mongoose.model('Genre', GenreSchema); 