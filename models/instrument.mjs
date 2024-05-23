import { default as mongoose } from "mongoose";
const Schema = mongoose.Schema;

let InstrumentSchema = new Schema({
    //TODO: 
    // fix relationship and detail below
    name: { type: String, required: true },
    history: String,
    family: String,
    // need test: connection: Genre attribute
    // Genre: Genre{ type: Schema.Types.ObjectId, ref: "Genre"},
    imageUri: String,
    soundClipUri: String
  });
 
//virtual below: 
  //BEWARE if there is "s"
  //BEWARE if there is "s"
InstrumentSchema.virtual("url").get(function () {
    return "/instruments/id/" + this._id;
  });

export default mongoose.model('Instrument', InstrumentSchema); 