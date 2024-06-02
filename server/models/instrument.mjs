import { default as mongoose } from "mongoose";
const Schema = mongoose.Schema;

let InstrumentSchema = new Schema({
    name: { type: String, required: true },
    history: { type: String },
    family: { type: String },
    genre: { type: Schema.Types.ObjectId, ref: "Genre" },
    imageUri: { type: String },
    soundClipUri: { type: String }
});

InstrumentSchema.virtual("url").get(function () {
    return "/instrument/" + this._id + "/";
});

import { default as Song } from "./song.mjs";

InstrumentSchema.virtual("songs").get(async function () {
    let songArray = await Song.find().where("instrument").equals(this._id).exec();
    return songArray;
});

InstrumentSchema.set('toJSON', { virtuals: true });
InstrumentSchema.set('toObject', { virtuals: true });

export default mongoose.model('Instrument', InstrumentSchema);