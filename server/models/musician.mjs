import { default as mongoose } from "mongoose";
const Schema = mongoose.Schema;

let MusicianSchema = new Schema({
    name: { type: String, required: true },
    imageUri: { type: String },
    anecdote: { type: String },
    process: { type: String }
});

MusicianSchema.virtual("url").get(function () {
    return "/musician/" + this._id + "/";
});

import { default as Song } from "./song.mjs";

MusicianSchema.virtual("songs").get(async function () {
    let songArray = await Song.find().where("musician").equals(this._id).exec();
    return songArray;
});

MusicianSchema.set('toJSON', { virtuals: true });
MusicianSchema.set('toObject', { virtuals: true });

export default mongoose.model('Musician', MusicianSchema);