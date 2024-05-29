import { default as mongoose } from "mongoose";
const Schema = mongoose.Schema;

let MusicianSchema = new Schema({
    name: { type: String, required: true },
    imageUri: {type: String},
    anecdote: {type: String},
    song: [{type: Schema.Types.ObjectId, ref: "Song"}],
    process: {type: String}
  });

//virtual below: 
  //BEWARE if there is "s"
  //BEWARE if there is "s"
MusicianSchema.virtual("url").get(function () {
return "/musician/" + this._id + "/";
});

MusicianSchema.set('toJSON', { virtuals: true });
MusicianSchema.set('toObject', { virtuals: true });

export default mongoose.model('Musician', MusicianSchema); 