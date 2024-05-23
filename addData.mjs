import mongoose from 'mongoose';
import Genre from './genre.js';
import Musician from './musician.js';
import Instrument from './instrument.js';
import Song from './song.js';

// Replace with our MongoDB connection string
const mongoDB = 'mongodb+srv://team2:team2password@chemeketa2024.q5phttf.mongodb.net/?retryWrites=true&w=majority&appName=Chemeketa2024';

async function main() {
    await mongoose.connect(mongoDB);

    await Genre.deleteMany({});
    await Musician.deleteMany({});
    await Instrument.deleteMany({});
    await Song.deleteMany({});

    const genre1 = new Genre({ name: '', description: '', songs: [song1._id], history: '', image: '' });
    const genre2 = new Genre({ name: '', description: '', songs: [song2._id], history: '', image: '' });
    const genre3 = new Genre({ name: '', description: '', songs: [song3._id], history: '', image: '' });
    const genre4 = new Genre({ name: '', description: '', songs: [song4._id], history: '', image: '' });
    const genre5 = new Genre({ name: '', description: '', songs: [song5._id], history: '', image: '' });
    const genre6 = new Genre({ name: '', description: '', songs: [song6._id], history: '', image: '' });
    const genre7 = new Genre({ name: '', description: '', songs: [song7._id], history: '', image: '' });
    const genre8 = new Genre({ name: '', description: '', songs: [song8._id], history: '', image: '' });
    const genre9 = new Genre({ name: '', description: '', songs: [song9._id], history: '', image: '' });
    const genre10 = new Genre({ name: '', description: '', songs: [song10._id], history: '', image: '' });

    await genre1.save();
    await genre2.save();
    await genre3.save();
    await genre4.save();
    await genre5.save();
    await genre6.save();
    await genre7.save();
    await genre8.save();
    await genre9.save();
    await genre10.save();

    const musician1 = new Musician({ name: '', picture: '', anecdote: '', songs: [song1._id], process: '' });
    const musician2 = new Musician({ name: '', picture: '', anecdote: '', songs: [song2._id], process: '' });
    const musician3 = new Musician({ name: '', picture: '', anecdote: '', songs: [song3._id], process: '' });
    const musician4 = new Musician({ name: '', picture: '', anecdote: '', songs: [song4._id], process: '' });
    const musician5 = new Musician({ name: '', picture: '', anecdote: '', songs: [song5._id], process: '' });
    const musician6 = new Musician({ name: '', picture: '', anecdote: '', songs: [song6._id], process: '' });
    const musician7 = new Musician({ name: '', picture: '', anecdote: '', songs: [song7._id], process: '' });
    const musician8 = new Musician({ name: '', picture: '', anecdote: '', songs: [song8._id], process: '' });
    const musician9 = new Musician({ name: '', picture: '', anecdote: '', songs: [song9._id], process: '' });
    const musician10 = new Musician({ name: '', picture: '', anecdote: '', songs: [song10._id], process: '' });

    await musician1.save();
    await musician2.save();
    await musician3.save();
    await musician4.save();
    await musician5.save();
    await musician6.save();
    await musician7.save();
    await musician8.save();
    await musician9.save();
    await musician10.save();

    const instrument1 = new Instrument({ name: '', history: '', family: '', genres: [genre1._id], imageUri: '', soundClipUri: '' });
    const instrument2 = new Instrument({ name: '', history: '', family: '', genres: [genre2._id], imageUri: '', soundClipUri: '' });
    const instrument3 = new Instrument({ name: '', history: '', family: '', genres: [genre3._id], imageUri: '', soundClipUri: '' });
    const instrument4 = new Instrument({ name: '', history: '', family: '', genres: [genre4._id], imageUri: '', soundClipUri: '' });
    const instrument5 = new Instrument({ name: '', history: '', family: '', genres: [genre5._id], imageUri: '', soundClipUri: '' });
    const instrument6 = new Instrument({ name: '', history: '', family: '', genres: [genre6._id], imageUri: '', soundClipUri: '' });
    const instrument7 = new Instrument({ name: '', history: '', family: '', genres: [genre7._id], imageUri: '', soundClipUri: '' });
    const instrument8 = new Instrument({ name: '', history: '', family: '', genres: [genre8._id], imageUri: '', soundClipUri: '' });
    const instrument9 = new Instrument({ name: '', history: '', family: '', genres: [genre9._id], imageUri: '', soundClipUri: '' });
    const instrument10 = new Instrument({ name: '', history: '', family: '', genres: [genre10._id], imageUri: '', soundClipUri: '' });

    await instrument1.save();
    await instrument2.save();
    await instrument3.save();
    await instrument4.save();
    await instrument5.save();
    await instrument6.save();
    await instrument7.save();
    await instrument8.save();
    await instrument9.save();
    await instrument10.save();

    const song1 = new Song({ name: '', soundClip: '', musicians: [musician1._id], genre: [genre1._id], instrument: [instrument1._id], video: '' });
    const song2 = new Song({ name: '', soundClip: '', musicians: [musician2._id], genre: [genre2._id], instrument: [instrument2._id], video: '' });
    const song3 = new Song({ name: '', soundClip: '', musicians: [musician3._id], genre: [genre3._id], instrument: [instrument3._id], video: '' });
    const song4 = new Song({ name: '', soundClip: '', musicians: [musician4._id], genre: [genre4._id], instrument: [instrument4._id], video: '' });
    const song5 = new Song({ name: '', soundClip: '', musicians: [musician5._id], genre: [genre5._id], instrument: [instrument5._id], video: '' });
    const song6 = new Song({ name: '', soundClip: '', musicians: [musician6._id], genre: [genre6._id], instrument: [instrument6._id], video: '' });
    const song7 = new Song({ name: '', soundClip: '', musicians: [musician7._id], genre: [genre7._id], instrument: [instrument7._id], video: '' });
    const song8 = new Song({ name: '', soundClip: '', musicians: [musician8._id], genre: [genre8._id], instrument: [instrument8._id], video: '' });
    const song9 = new Song({ name: '', soundClip: '', musicians: [musician9._id], genre: [genre9._id], instrument: [instrument9._id], video: '' });
    const song10 = new Song({ name: '', soundClip: '', musicians: [musician10._id], genre: [genre10._id], instrument: [instrument10._id], video: '' });

    await song1.save();
    await song2.save();
    await song3.save();
    await song4.save();
    await song5.save();
    await song6.save();
    await song7.save();
    await song8.save();
    await song9.save();
    await song10.save();

    console.log('Data added');
    await mongoose.disconnect();
}

main().catch(err => console.log(err));