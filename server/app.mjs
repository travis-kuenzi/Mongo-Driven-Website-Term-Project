import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import multer from 'multer';
import { createMusician, create_post, deleteMusician, musicianById, musicianList, update_get, update_post, verifyDelete } from './controllers/musicianController.mjs';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const connection_string = "mongodb+srv://team2:team2password@chemeketa2024.q5phttf.mongodb.net/?retryWrites=true&w=majority&appName=Chemeketa2024";
mongoose.connect(connection_string, {
}).catch(err => console.error('Error connecting to MongoDB:', err));

app.use(express.static(path.join(__dirname, '..', 'Public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const upload = multer({ dest: 'public/uploads/' });

import { default as genreRouter } from './routes/genres.mjs';
app.use('/genre', genreRouter);

import { default as musicianRouter } from './routes/musicians.mjs';
app.use('/musician', musicianRouter);

import { default as instrumentRouter } from './routes/instruments.mjs';
app.use('/instrument', instrumentRouter);

import { default as songRouter } from './routes/songs.mjs';
app.use('/song', songRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '..', 'Public', '404.html'));
});

app.use(function (err, req, res, next) {
    let message = err.message;
    console.log(req.app);

    res.status(err.status || 500);

    let body = `<h1>${message}</h1>`;
    body += `<h2>${err.status}</h2>`;
    body += `<pre>${err.stack}</pre>`;
    res.send(body);
});

const port = 3000;
app.listen(port);
console.log("App listening on port 3000");