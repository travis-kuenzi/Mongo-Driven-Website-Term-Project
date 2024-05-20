import { default as express } from 'express';
import { default as path } from 'path';
// import { default as createError } from 'http-errors';

// Create an express app
const app = express();

// Get the directory name of the current module
const __dirname = import.meta.dirname;

app.use(express.static('public'));

// view engine setup
//app.set("views", path.join(__dirname, "views"));
//app.set("view engine", "ejs");

// serve index.html as the route file
app.get("/", (req, res) => {
    let fileName = __dirname + "/public.index.html"
    res.sendFile(fileName);
  });

app.get("/test", (req, res) => {
    res.send("You accessed /test");
  });
  
//---------------------------------------------------
// Direct all /genre requests to the rules in routes/genre.mjs
import {default as genreRouter} from './routes/genre.mjs';
app.use('/genre', genreRouter);

//---------------------------------------------------
// Direct all /musician requests to the rules in routes/musician.mjs
import {default as musicianRouter} from './routes/musician.mjs';
app.use('/musician', musicianRouter);

//---------------------------------------------------
// Direct all /instrument requests to the rules in routes/instrument.mjs
import {default as instrumentRouter} from './routes/instrument.mjs';
app.use('/instrument', instrumentRouter);

//---------------------------------------------------
// Direct all /song requests to the rules in routes/song.mjs
import {default as songRouter} from './routes/song.mjs';
app.use('/song', songRouter);



//---------------------------------------------------
// If all else fails, send a 404 error
app.use(function (req, res) {
    //send a custom 404 (file not found) page
    res.status(404);
    res.sendFile(__dirname + "/public/error.html");
    //---------------------------------------------------
});


//---------------------------------------------------
// error handler - if any middleware above calls next(error)
// this will handle it
/* app.use(function (err, req, res) {
    let message = err.message;
    console.log(req.app);

    // Set the status code of response, default to 500
    res.status(err.status || 500);

    let body = `<h1>${message}</h1>`;
    body += `<h2>${err.status}</h2>`;
    body += `<pre>${err.stack}</pre>`;
    res.send(body);
}); */


//---------------------------------------------------
// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port} in directory ${__dirname}`);
});
