import mongoose from 'mongoose';
import Genre from './genre.js';
import Musician from './musician.js';
import Instrument from './instrument.js';
import Song from './song.js';

// Replace with our MongoDB connection string
const mongoDB = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority';

async function main() {
    await mongoose.connect(mongoDB);

    const genres = await Genre.find({}).populate('songs');
    const musicians = await Musician.find({}).populate('songs');
    const instruments = await Instrument.find({}).populate('genres');
    const songs = await Song.find({}).populate('musicians genre instrument');

    console.log('Genres:', genres);
    console.log('Musicians:', musicians);
    console.log('Instruments:', instruments);
    console.log('Songs:', songs);

    await mongoose.disconnect();
}

main().catch(err => console.log(err));