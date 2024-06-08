import { default as mongoose } from "mongoose";
const Schema = mongoose.Schema;

let GenreSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  history: { type: String },
  imageUri: { type: String },
  instruments: [{ type: Schema.Types.ObjectId, ref: 'Instrument' }]
});

import { default as Song } from "./song.mjs";
GenreSchema.virtual("songs").get(async function () {
  let songArray = await Song.find().where("genre").equals(this._id).exec();
  return songArray;
});


GenreSchema.virtual("url").get(function () {
  return "/genre/" + this._id + "/";
});


GenreSchema.set('toJSON', { virtuals: true });
GenreSchema.set('toObject', { virtuals: true });

export default mongoose.model('Genre', GenreSchema);