import { default as mongoose } from "mongoose";
import { default as Song } from "./song.mjs";

const Schema = mongoose.Schema;

let MusicianSchema = new Schema({
    name: { type: String, required: true },
    imageUri: { type: String },
    anecdote: { type: String },
    processVideoUri: { type: String },
    songs: [{ type: Schema.Types.ObjectId, ref: 'Song' }]
});

MusicianSchema.virtual("url").get(function () {
    return "/musician/" + this._id + "/";
});

MusicianSchema.virtual("relatedSongs").get(async function () {
    return await Song.find({ musician: this._id }).exec();
});

MusicianSchema.set('toJSON', { virtuals: true });
MusicianSchema.set('toObject', { virtuals: true });

export default mongoose.model('Musician', MusicianSchema);