import { default as express } from 'express';
import { default as path } from 'path';
import { default as createError } from 'http-errors';

// Import the route files
import genreRoutes from './routes/genre.js';
import musicianRoutes from './routes/musician.js';
import instrumentRoutes from './routes/instrument.js';
import songRoutes from './routes/song.js';

// Create an express app
const app = express();

// Get the directory name of the current module
const __dirname = import.meta.dirname;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Integrate the routes
app.use('/api/genres', genreRoutes);
app.use('/api/musicians', musicianRoutes);
app.use('/api/instruments', instrumentRoutes);
app.use('/api/songs', songRoutes);

//---------------------------------------------------
// If no other route works, try looking for the file in the
// public folder
app.use(express.static(path.join(__dirname, 'public')));


//---------------------------------------------------
// If all else fails, send a 404 error
app.use(function (req, res) {
    //send a custom 404 (file not found) page
    res.status(404);
    res.sendFile(__dirname + "/public/404.html");
    //---------------------------------------------------
});


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
    console.log(`Example app listening on port ${port} in directory ${__dirname}`);
});
