This is William's test ReadMe file.
This is CS290 Group 2's main repo 😸
It will contain our basic information and code
We have another google doc📄 for discussing and Github project page💻 for project tracking

Wk4 Update: Made an temporary gitignore
    Will be working on our Mermaid Diagram

# Project Documentation
Here are our proposed data types:
```mermaid
classDiagram 
    class Genre {
      + Name
      + Description
      + Musicians
      + Songs
      + History
    }

    class Musician {
      + Name
      + Picture
      + Anecdote
      + Songs
      + Process
    }

    class Instrument {
      + Name
      + History
      + Category/Family
      + Genre
      + Image
      + Sound clip
      + Related Instruments
    }

    class Song {
      + Name
      + Sound clip
      + Musicians
      + Genre
      + Instrument
      + Video
    }


    %%Links between entities - don't worry too much about details
    Musician "1..*" -- "1..*" Song 

    Genre "1" -- "*" Musician
    Genre "1..*" -- "*" Song

    Song "1" -- "1..*" Musician
    Song "1" -- "*" Instrument

    Instrument "1" -- "*" Genre
    Instrument "*" -- "*" Instrument
```

Relationships Descriptions:
Instrument Relationship:
* Each instrument has many genres (aggregation)
* Each instrument is related to many other instruments (aggregation)

WK3 Update:
Set up a /gitignore
Make a mermaid diagram for datatypes
try create some conflics and practice mergins
(Apr15 Monday) William, Nina, Travis, and Sophia decided on topic, data types, and whose responsibility for owning each data type. 
(Apr17 Wednesday) Sophia sent Andrew an email with a list of team 2 data types.

WK2 Update(Apr10 after class)
William, Nina, Travis will meet tmr Thursday 1230
Next WK3 wendsday, we would give Andrew our sample complex data type as he requires.
Please see around.


Teammates Contact
(william) Yifei Zhao
yzhao7@my.chemeketa.edu
Nina
nturney@chemeketa.edu
Sophia Liu
sophiayfliu@gmail.com
Travis
tkuenz20@my.chemeketa.edu

google doc link:
https://docs.google.com/document/d/1HSGYUsgJcubvtRpu8RelQNlYKIowSoGIGLC2T2jS1LA/edit?pli=1
Github project track link (also can be seen top bar as 'projects')
https://github.com/orgs/ChemeketaCS/projects/22/views/1
Sophia's Final project ideas page:
https://docs.google.com/document/d/1RaGtYDZ_dPJ0JbQ883z3_zTJDKY0bGpSdCKCP5NRS_A/edit
