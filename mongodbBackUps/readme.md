This is a server data backup folder, it contains what we have on the cloud
william:
1. you install mongoexport, make sure you include path, this can be done by 3 steps
    a) download mongodb current zipfile, just unzip it to a folder at a desired place.
    b) open that unziped folder, copy it's bin file 's file path.
    c) copy that pathand add it to your path variable in environment path
        Now you reopen powershell it should work
2. you modify export options and use this powershell command in your folder

To back up:
        // back up genres, output 'genresData.json'
    mongoexport --uri="mongodb+srv://team2:team2password@chemeketa2024.q5phttf.mongodb.net/?retryWrites=true&w=majority&appName=Chemeketa2024" --collection=genres --out=genresData.json --jsonArray

        //back up songs, output 'songsData.json'
    mongoexport --uri="mongodb+srv://team2:team2password@chemeketa2024.q5phttf.mongodb.net/?retryWrites=true&w=majority&appName=Chemeketa2024" --collection=songs --out=songsData.json --jsonArray

        //back up musicians, output 'musiciansData.json'
    mongoexport --uri="mongodb+srv://team2:team2password@chemeketa2024.q5phttf.mongodb.net/?retryWrites=true&w=majority&appName=Chemeketa2024" --collection=musicians --out=musiciansData.json --jsonArray

        //back up instruments, output 'instrumentsData.json'
    mongoexport --uri="mongodb+srv://team2:team2password@chemeketa2024.q5phttf.mongodb.net/?retryWrites=true&w=majority&appName=Chemeketa2024" --collection=instruments --out=instrumentsData.json --jsonArray
To import:
        // import instrumentsData back to db. (It should work find but I don't dare to try it before presentation)
        //  DO  command inside mongodbBackUps folder first!
        mongoimport --uri="mongodb+srv://team2:team2password@chemeketa2024.q5phttf.mongodb.net/?retryWrites=true&w=majority&appName=Chemeketa2024" --collection=instruments --file=instrumentsData.json --jsonArray

        //genre
        mongoimport --uri="mongodb+srv://team2:team2password@chemeketa2024.q5phttf.mongodb.net/?retryWrites=true&w=majority&appName=Chemeketa2024" --collection=genres --file=genresData.json --jsonArray
        //musician
        mongoimport --uri="mongodb+srv://team2:team2password@chemeketa2024.q5phttf.mongodb.net/?retryWrites=true&w=majority&appName=Chemeketa2024" --collection=musicians --file=musiciansData.json --jsonArray
        //song
        mongoimport --uri="mongodb+srv://team2:team2password@chemeketa2024.q5phttf.mongodb.net/?retryWrites=true&w=majority&appName=Chemeketa2024" --collection=songs --file=songsData.json --jsonArray
