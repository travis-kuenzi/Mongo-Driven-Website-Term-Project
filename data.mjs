//Module that exports some arrays of data to seed DB with
//This version stores relations outside of individual objects
// Use the models to make objects
const GenreList = ([
{
  name: "Jazz",
  description: "A genre of music that originated in the African-American communities...",
  history: "Jazz originated in the late 19th and early 20th centuries...",
  image: "jazz_image_url"
},
{
  name: "House Music",
  description: "Electronic dance music characterized by a repetitive four-on-the-floor beat...",
  history: "House music originated in Chicago during the early 1980s...",
  image: "house_music_image_url"
},
{
name: "Country",
description: "A genre of American popular music that originated in the Southern United States...",
history: "Country music has its roots in traditional folk music, blues, and gospel music of the Appalachian region...",
image: "country_music_image_url"

},
{
  name: "Rock",
  description: "Rock music is a broad genre of popular music that originated as 'rock and roll' in the United States...",
  history: "Rock music evolved from the rock and roll music of the late 1940s and early 1950s...",
  image: "rock_music_image_url"
},

]);

const MusicianList = ([
  {
  name: "John Doe",
  picture: "johndoe_picture_url",
  anecdote: "John Doe started playing guitar at the age of 5...",
  process: "John practices 4 hours a day..."
},
{
  name: "Daft Punk",
  picture: "daft_punk_picture_url",
  anecdote: "Daft Punk is a French electronic music duo formed in 1993...",
  process: "Daft Punk combines elements of house, funk, and disco music..."

},
{
  name: "Eagles",
  picture: "eagles_picture_url",
  anecdote: "The Eagles are an American rock band formed in Los Angeles in 1971...",
  process: "The Eagles have sold over 200 million records worldwide..."
},
{
  name: "Eric Clapton",
  picture: "eric_clapton_picture_url",
  anecdote: "Eric Clapton is an English rock and blues guitarist, singer, and songwriter...",
  process: "Clapton is the only three-time inductee to the Rock and Roll Hall of Fame..."
}


]);

const InstrumentList = ([{
  name: "Guitar",
  history: "The guitar has ancient roots, dating back over 4000 years...",
  family: "String Instruments",
  imageUri: "guitar_image_url",
  soundClipUri: "guitar_sound_clip_url"
},
{
  name: "Keyboard",
  history: "The keyboard instrument family includes the piano, organ, harpsichord, and many other instruments...",
  family: "Keyboard Instruments",
  imageUri: "keyboard_image_url",
  soundClipUri: "keyboard_sound_clip_url"
},
{
  name: "Classic Guitar",
  history: "The classical guitar, also known as the nylon-string guitar or Spanish guitar...",
  family: "String Instruments",
  imageUri: "classic_guitar_image_url",
  soundClipUri: "classic_guitar_sound_clip_url"
},
{
  name: "Drum",
    history: "Drums are among the oldest musical instruments, with evidence of their existence dating back thousands of years...",
    family: "Percussion Instruments",
    imageUri: "drum_image_url",
    soundClipUri: "drum_sound_clip_url"
}

]);

const SongList = ([

  {
    name: "Layla",
    soundClipUri: "layla_sound_clip_url",
    videoUri: "layla_video_url"
  },
  {
    name: "Hotel California",
    soundClipUri: "hotel_california_sound_clip_url",
    videoUri: "hotel_california_video_url"
  },
  {
    name: "Give Life Back to Music",
    soundClipUri: "give_life_back_to_music_sound_clip_url",
    videoUri: "give_life_back_to_music_video_url"
  },
  ]
);

// Song-Genre Relation
const songGenreRelation = [
  { SongIndex: 0, GenreIndex: 3 }, // Smooth Jazz belongs to Rock
  { SongIndex: 1, GenreIndex: 3 },  // Hotel California belongs to Rock
  { SongIndex: 2, GenreIndex: 1 }   // Give Life Back to Music belongs to House Music
];

// Song-Musician Relation
const songMusicianRelation = [
  { SongIndex: 1, MusicianIndex: 1 }, // Give Life Back to Music by Daft Punk
  { SongIndex: 1, MusicianIndex: 2 }  // Hotel California by Eagles
];

// Song-Instrument Relation
const songInstrumentRelation = [
  { SongIndex: 0, InstrumentIndex: 0 }, // Smooth Jazz features Guitar
  { SongIndex: 1, InstrumentIndex: 3 },  // Hotel California features Drum
  { SongIndex: 1, InstrumentIndex: 1 }  // Give Life Back to Music features Keyboard

];
export default { GenreList, MusicianList, InstrumentList, SongList, songGenreRelation, songMusicianRelation, songInstrumentRelation };
