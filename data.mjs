//Module that exports some arrays of data to seed DB with
//This version stores relations outside of individual objects
// Use the models to make objects
const GenreList = ({
  name: "Jazz",
  description: "A genre of music that originated in the African-American communities...",
  history: "Jazz originated in the late 19th and early 20th centuries...",
  image: "jazz_image_url"
});

const MusicianList = ({
  name: "John Doe",
  picture: "johndoe_picture_url",
  anecdote: "John Doe started playing guitar at the age of 5...",
  process: "John practices 4 hours a day..."
});

const InstrumentList = ({
  name: "Guitar",
  history: "The guitar has ancient roots, dating back over 4000 years...",
  family: "String Instruments",
  imageUri: "guitar_image_url",
  soundClipUri: "guitar_sound_clip_url"
});

const SongList = ([

  {
    name: "Smooth Jazz",
    soundClipUri: "smooth_jazz_sound_clip_url",
    videoUri: "smooth_jazz_video_url"
  },
  {
    name: "Hotel California",
    soundClipUri: "hotel_california_sound_clip_url",
    videoUri: "hotel_california_video_url"
  }
  ]
);

//TODO:
/*
example is not complete (5/23 8pm WZ)
1  //relations example
 let xxxyyyRelation = [
  { SongIndex: 1, GenreIndex: 0 },
  { SongIndex: 2, GenreIndex: 1 },
]

2 Export relation below
*/
export default { GenreList, MusicianList, InstrumentList, SongList};
