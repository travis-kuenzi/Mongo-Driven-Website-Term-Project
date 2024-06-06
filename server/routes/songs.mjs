/* import express from 'express';
const router = express.Router();
import * as songController from '../controllers/songController.mjs';

router.get('/', (req, res, next) => {
    console.log('GET /song');
    songController.songList(req, res, next);
});
router.get('/create', (req, res, next) => {
    console.log('GET /song/create');
    songController.createSongForm(req, res, next);
});
router.post('/create', (req, res, next) => {
    console.log('POST /song/create');
    songController.createSong(req, res, next);
});
router.get('/:id', (req, res, next) => {
    console.log(`GET /song/${req.params.id}`);
    songController.songById(req, res, next);
});
router.get('/update/:id', (req, res, next) => {
    console.log(`GET /song/update/${req.params.id}`);
    songController.updateSongForm(req, res, next);
});
router.post('/update/:id', (req, res, next) => {
    console.log(`POST /song/update/${req.params.id}`);
    songController.updateSong(req, res, next);
});
router.post('/delete/:id', (req, res, next) => {
    console.log(`POST /song/delete/${req.params.id}`);
    songController.deleteSong(req, res, next);
});

export default router; */

import { default as express } from "express";
import * as songController from "../controllers/songController.mjs";

const router = express.Router();


router.get("/", songController.songList);
router.get("/create", songController.createSong);
router.get("/update/:id", songController.update_get);
router.post("/update/:id", songController.update_post);
router.get('/:id', songController.songById);
router.post('/delete/:id', songController.deleteSong);

export default router;