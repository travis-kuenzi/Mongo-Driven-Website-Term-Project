import { default as mongoose } from "mongoose";
const Schema = mongoose.Schema;

let InstrumentSchema = new Schema({
    name: { type: String, required: true },
    history: String,
    family: String,
     //Hi Travis! Uncomment this if needed!
    // Genre: Genre{ type: Schema.Types.ObjectId, ref: "Genre"},
    imageUri: String,
    soundClipUri: String
  });
 
// TODO: Virtuals
// *

export default mongoose.model('Instrument', InstrumentSchema); 