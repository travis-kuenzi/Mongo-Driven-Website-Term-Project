import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import genreRouter from './routes/genres.mjs';
import musicianRouter from './routes/musicians.mjs';
import instrumentRouter from './routes/instruments.mjs';
import songRouter from './routes/songs.mjs';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const connection_string = "mongodb+srv://team2:team2password@chemeketa2024.q5phttf.mongodb.net/?retryWrites=true&w=majority&appName=Chemeketa2024";
mongoose.connect(connection_string);

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/genre', genreRouter);
app.use('/musician', musicianRouter);
app.use('/instrument', instrumentRouter);
app.use('/song', songRouter);



//---------------------------------------------------
// If all else fails, send a 404 error
/* app.use(function (req, res) {
    //send a custom 404 (file not found) page
    res.status(404);
    res.sendFile(path.join(__dirname, 'Public', 'error.html'));
    //---------------------------------------------------
}); */

/* app.use((err, req, res, next) => {
    res.status(500).sendFile(path.join(__dirname, '..', 'public', 'error.html'));
}); */


//---------------------------------------------------
// error handler - if any middleware above calls next(error)
// this will handle it
app.use(function (err, req, res) {
    let message = err.message;
    console.log(req.app);

    // Set the status code of response, default to 500
    res.status(err.status || 500);

    let body = `<h1>${message}</h1>`;
    body += `<h2>${err.status}</h2>`;
    body += `<pre>${err.stack}</pre>`;
    res.send(body);
});


//---------------------------------------------------
// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});