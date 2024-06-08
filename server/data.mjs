//Module that exports some arrays of data to seed DB with
//This version stores relations outside of individual objects
// Use the models to make objects
const GenreList = ([
  {
    name: "Classical",
    description: 'Ludwig van Beethoven, a pivotal figure bridging the Classical and Romantic periods, is strongly associated with this genre. Instruments commonly used include the piano, violin, cello, and flute. Notable works include Beethoven&apos;s "Symphony No. 9," Mozart&apos;s "Requiem," and Bach&apos;s "Brandenburg Concertos."',
    history: "Classical music, rooted in the traditions of Western liturgical and secular music from the medieval period to the present, is characterized by its highly structured forms and sophisticated compositional techniques. Originating in the late 11th century, it flourished through the Renaissance, Baroque, Classical, Romantic, and Modern eras.",
    image: "https://www.worldhistory.org/img/r/p/1000x1200/17602.png.webp?v=1717358523"
  },
  {
    name: "Jazz",
    description: 'It is distinguished by its use of improvisation, syncopated rhythms, and distinctive swing feel. Louis Armstrong, known for his virtuosic trumpet playing and gravelly voice, is a key figure in jazz. Typical instruments include the trumpet, saxophone, double bass, piano, and drums. Famous pieces include Armstrong&apos;s "What a Wonderful World," Duke Ellington&apos;s "Take the &lsquo;A&rsquo; Train," and Miles Davis&apos;s "Kind of Blue."',
    history: "Jazz emerged in the late 19th and early 20th centuries in the United States, primarily within African American communities.",
    image: "https://en.wikipedia.org/wiki/Louis_Armstrong#/media/File:Louis_Armstrong_restored.jpg"
  },
  {
    name: "Blues",
    description: 'It incorporates spirituals, work songs, and field hollers and is characterized by its use of the twelve-bar blues progression. B.B. King, known as the "King of the Blues," is a prominent musician in this genre. Instruments typically include the guitar, harmonica, piano, and bass. Signature songs include King&apos;s "The Thrill Is Gone," Robert Johnson&apos;s "Cross Road Blues," and Muddy Waters&apos;s "Hoochie Coochie Man."',
    history: "The blues genre developed in the Deep South of the United States around the end of the 19th century.",
    image: "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-195232-85224761.jpg?w=1581&h=1054&crop=1"
  },
 
  {
    name: "Rock",
    description: 'The Beatles, often hailed as the greatest rock band, epitomize this genre. Standard instruments include electric guitar, bass guitar, drums, and keyboards. Iconic rock songs include Elvis Presley&apos;s "Jailhouse Rock," The Beatles "Hey Jude," Led Zeppelin&apos;s "Stairway to Heaven," and The Rolling Stones&apos; "Satisfaction."',
    history: "Rock music originated in the United States in the late 1940s and early 1950s, evolving from rock and roll and rhythm and blues. It is known for its strong beat, simple chord progressions, and use of electric guitar.",
    image: "https://www.thesun.co.uk/wp-content/uploads/2023/02/photo-elvis-presley-photo-michael-54084287.jpg?strip=all&w=953"
  },

  {
    name: "Pop",
    description: ' It is characterized by catchy melodies and simple, relatable lyrics. Michael Jackson, dubbed the "King of Pop," is a central figure in this genre. Common instruments include the electric guitar, synthesizer, drums, and bass. Noteworthy pop songs include Jackson&apos;s "Thriller," Madonna&apos;s "Like a Virgin," and Britney Spears&apos;s "...Baby One More Time."',
    history: "Pop music, designed to appeal to a broad audience, emerged in its modern form during the mid-1950s in the United States and United Kingdom.",
    image: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-610598430-1533292763.jpg?resize=1200:*"
  },

  {
    name: "Country",
    description: 'It is known for its storytelling lyrics and acoustic instrumentation. Johnny Cash, with his deep, resonant voice, is a legendary figure in country music. Common instruments include the acoustic guitar, banjo, fiddle, and harmonica. Classic songs include Cash&apos;s "Ring of Fire," Dolly Parton&apos;s "Jolene," and Hank Williams&apos;s "Your Cheatin&apos; Heart."',
    history: "Country music, with roots in American folk music, blues, and Western music, originated in the southern United States in the 1920s.",
    image: "https://hips.hearstapps.com/hmg-prod/images/dolly-parton-1085-1585675084.jpg?crop=0.537xw:1.00xh;0.286xw,0&resize=980:*"

  },

  {
    name: "Folk",
    description: 'Bob Dylan, known for his profound lyrics and influence on contemporary music, is a pivotal figure in folk. Instruments typically include the acoustic guitar, harmonica, and banjo. Significant works include Dylan&apos;s "Blowin&apos; in the Wind," Woody Guthrie&apos;s "This Land Is Your Land," and Joan Baez&apos;s "Diamonds & Rust."',
    history: "Folk music encompasses traditional music passed down orally and contemporary music that retains traditional elements. It often addresses social and political issues.",
    image: "http://wfdd-live.s3.amazonaws.com/images/story/50-Years-Ago-Bob-Dylan-Electrified-A-Decade-With-One-Concert-425066868-1445827463.jpg"
  },

  
  {
    name: "Reggae",
    description: ' It is known for its offbeat rhythms and socially conscious lyrics. Bob Marley, the most famous reggae artist, brought the genre to international prominence. Instruments often include the electric guitar, bass, drums, and keyboard. Notable tracks include Marley&apos;s "No Woman, No Cry," Peter Tosh&apos;s "Legalize It," and Jimmy Cliff&apos;s "The Harder They Come."',
    history: "Reggae developed in Jamaica in the late 1960s, evolving from earlier genres like ska and rocksteady.",
    image: "https://hips.hearstapps.com/hmg-prod/images/photo-of-bob-marley-bob-marley-performing-live-on-stage-at-news-photo-1707857936.jpg?crop=0.624xw:0.984xh;0.158xw,0&resize=1200:*"
  },

  {
    name: "R&B/Soul",
    description: 'This genre is characterized by its emotive vocals and use of gospel and blues elements. Aretha Franklin, the "Queen of Soul," is a prominent artist in this genre. Typical instruments include the electric guitar, bass, piano, and drums. Renowned songs include Franklin&apos;s "Respect," Marvin Gaye&apos;s "What&apos;s Going On," and Stevie Wonder&apos;s "Superstition."',
    history: "R&B (Rhythm and Blues) and soul music originated in African American communities in the 1940s and 1950s.",
    image: "R&https://www.billboard.com/wp-content/uploads/media/franklin-fea-bb20-debut-2018-jc-dcdkm-billboard-1500.jpg?w=942&h=623&crop=1"
  },

  {
    name: "Electronic",
    description: 'It encompasses a wide range of styles, from house and techno to drum and bass and dubstep. Kraftwerk, pioneers of electronic music, are highly influential in this genre. Instruments typically include synthesizers, drum machines, and computer software. Key tracks include Kraftwerk&apos;s "Autobahn," Daft Punk&apos;s "One More Time," and The Prodigy&apos;s "Firestarter."',
    history: "Electronic music began in the early 20th century with the advent of electronic instruments and technology.",
    image: "https://sunsetmarquis.com/wp-content/uploads/2024/01/Kraftwerk-in-Concert.webp"
  },

  {
    name: "Hip Hop/Rap",
    description: 'This genre is characterized by rhythmic speech (rapping), DJing, breakdancing, and graffiti art. Tupac Shakur, known for his impactful lyrics and strong presence, is a seminal figure in hip hop. Instruments often include turntables, drum machines, synthesizers, and samplers. Influential works include Tupac&apos;s "Changes," The Notorious B.I.G.&apos;s "Juicy," and Run-D.M.C.&apos;s "Walk This Way."',
    history: "Hip hop and rap originated in the Bronx, New York City, during the 1970s.",
    image: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/31CD/production/_131294721_gettyimages-1368528045.jpg.webp"
  },

]);

const MusicianList = ([
  {
    name: "John Doe",
    picture: "johndoe_picture_url",
    anecdote: "John Doe has no published music yet",
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
  name: "Acoustic Guitar",
  history: "The guitar has ancient roots, dating back over 4000 years...",
  family: "String Instruments",
  imageUri: "https://th.bing.com/th/id/R.672dcc14c27f13a9d386fbf5787fd512?rik=nqtc4%2f6Z5yEA6w&riu=http%3a%2f%2fwww.prodipeguitars.co.uk%2fmedia%2fjmfsa25_faceprodipe.jpg&ehk=nLK1TW6OEXatDj72RcsRWiCMdj89ji10389tCU%2fmsTE%3d&risl=&pid=ImgRaw&r=0",
  soundSampleUri: "https://www.youtube.com/embed/htnobkrtDoo?si=bUv9iuF-R4xctppr"
},
{
  name: "Digital Piano",
  history: "The keyboard instrument family includes the piano, organ, harpsichord, and many other instruments...",
  family: "Keyboard Instruments",
  imageUri: "https://images-na.ssl-images-amazon.com/images/I/61qVAf3NBdL._AC_SX679_.jpg",
  soundSampleUri: "https://www.youtube.com/embed/utWjs8tro0k?si=-VPpyxUpJp2anxiV"
},
{
  name: "Classic Guitar",
  history: "The classical guitar, also known as the nylon-string guitar or Spanish guitar...",
  family: "String Instruments",
  imageUri: "https://th.bing.com/th/id/R.2269f8f4f6f5cbca1ba287e74a7a8bdb?rik=RJNkGl4CA4YjtQ&pid=ImgRaw&r=0",
  soundSampleUri: "https://www.youtube.com/embed/bMt81mNhuZA?si=W3sZ0iJ4yvDezGiV"
},
{
  name: "Drum",
  history: "Drums are among the oldest musical instruments, with evidence of their existence dating back thousands of years...",
  family: "Percussion Instruments",
  imageUri: "https://www.bhphotovideo.com/images/images2500x2500/tama_ip52nchbk_imperialstar_5_piece_complete_kit_1366236.jpg",
  soundSampleUri: "https://www.youtube.com/embed/2fqzbwsy4nA?si=yyzOSWXa3RA5I4wW"
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

//One to one Relationships
// Song-Musician Relation
const songMusicianRelation = [
  { SongIndex: 0, MusicianIndex: 3 }, // Layla by Eric Clapton
  { SongIndex: 1, MusicianIndex: 2 },  // Hotel California by Eagles
  { SongIndex: 2, MusicianIndex: 1 }, // Give Life Back to Music by Daft Punk
];

//One to many relationships
// Song-Instrument Relation
const songInstrumentRelation = [
  { SongIndex: 0, InstrumentIndex: 0 }, // Layla features Guitar
  { SongIndex: 1, InstrumentIndex: 3 },  // Hotel California features Drum
  //TODO: song could save more than 1 instrument. How does that work?
  // { SongIndex: 2, InstrumentIndex: [1,2] }  // Give Life Back to Music features Keyboard and Drum
  { SongIndex: 2, InstrumentIndex: 1 }  // Give Life Back to Music features Keyboard and Drum

];

// Song-Genre Relation
const songGenreRelation = [
  { SongIndex: 0, GenreIndex: 3 }, // Layla is Rock music
  { SongIndex: 1, GenreIndex: 3 },  // Hotel California belongs to Rock
  { SongIndex: 2, GenreIndex: 1 }   // Give Life Back to Music belongs to House Music
];

const genreInstrumentRelation = [
  { InstrumentIndex: 0, GenreIndex:  0}, // 
  { InstrumentIndex: 5, GenreIndex: 1 },  // 
  { InstrumentIndex: 2, GenreIndex: 2 },
  { InstrumentIndex: 3, GenreIndex: 3 }  //
];

export default { GenreList, MusicianList, InstrumentList, SongList, songGenreRelation, songMusicianRelation, songInstrumentRelation, genreInstrumentRelation};
