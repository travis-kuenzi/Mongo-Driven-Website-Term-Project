import { default as mongoose } from "mongoose";
const Schema = mongoose.Schema;

let InstrumentSchema = new Schema({
    //TODO: 
    // fix relationship and detail below
    name: { 
      type: String, 
      required: true 
    },
    history: { 
      type: String
    },
    family: {
      type: String
    },
    genre: { 
      type: Schema.Types.ObjectId, 
      ref: "Genre"
    },
    imageUri: {type: String},
    soundClipUri: {type: String}
  });
 
//virtual below: 
  //BEWARE if there is "s"
  //BEWARE if there is "s"
InstrumentSchema.virtual("url").get(function () {
    return "/instrument/" + this._id + "/";
  });

InstrumentSchema.set('toJSON', { virtuals: true });
InstrumentSchema.set('toObject', { virtuals: true });

export default mongoose.model('Instrument', InstrumentSchema); 