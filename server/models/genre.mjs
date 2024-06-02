import { default as mongoose } from "mongoose";
const Schema = mongoose.Schema;

let GenreSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    songs: [{ type: Schema.Types.ObjectId, ref: "Song" }],
    history: { type: String },
    imageUri: { type: String }
});

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