import { default as mongoose } from 'mongoose';
import { default as Genre } from './models/genre.mjs';
import { default as Musician } from './models/musician.mjs';
import {default as Instrument } from './models/instrument.mjs';
import { default as Song } from './models/song.mjs';

// Replace with our MongoDB connection string
const mongoDB = 'mongodb+srv://team2:team2password@chemeketa2024.q5phttf.mongodb.net/?retryWrites=true&w=majority&appName=Chemeketa2024';

async function main() {
    await mongoose.connect(mongoDB);

    await Genre.deleteMany({});
    await Musician.deleteMany({});
    await Instrument.deleteMany({});
    await Song.deleteMany({});

    
    const genre1 = new Genre({ name: 'This'});
    const genre2 = new Genre({ name: 'is'});
    const genre3 = new Genre({ name: 'a'});
    const genre4 = new Genre({ name: 'test'});
    const genre5 = new Genre({ name: 'for'});
    const genre6 = new Genre({ name: 'testing'});
    const genre7 = new Genre({ name: 'if'});
    const genre8 = new Genre({ name: 'genre'});
    const genre9 = new Genre({ name: 'will'});
    const genre10 = new Genre({ name: 'work!'});
    
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

    const musician1 = new Musician({ name: 'This'});
    const musician2 = new Musician({ name: 'is'});
    const musician3 = new Musician({ name: 'a'});
    const musician4 = new Musician({ name: 'test'});
    const musician5 = new Musician({ name: 'for'});
    const musician6 = new Musician({ name: 'testing'});
    const musician7 = new Musician({ name: 'if'});
    const musician8 = new Musician({ name: 'musician'});
    const musician9 = new Musician({ name: 'will'});
    const musician10 = new Musician({ name: 'work'});

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

    const instrument1 = new Instrument({ name: 'This'});
    const instrument2 = new Instrument({ name: 'is'});
    const instrument3 = new Instrument({ name: 'a'});
    const instrument4 = new Instrument({ name: 'test'});
    const instrument5 = new Instrument({ name: 'for'});
    const instrument6 = new Instrument({ name: 'testing'});
    const instrument7 = new Instrument({ name: 'if'});
    const instrument8 = new Instrument({ name: 'instrument'});
    const instrument9 = new Instrument({ name: 'will'});
    const instrument10 = new Instrument({ name: 'work'});

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

    const song1 = new Song({ name: 'This'});
    const song2 = new Song({ name: 'is'});
    const song3 = new Song({ name: 'a'});
    const song4 = new Song({ name: 'test'});
    const song5 = new Song({ name: 'for'});
    const song6 = new Song({ name: 'testing'});
    const song7 = new Song({ name: 'if'});
    const song8 = new Song({ name: 'song'});
    const song9 = new Song({ name: 'will'});
    const song10 = new Song({ name: 'work'});

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