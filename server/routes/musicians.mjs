/* import express from 'express';
const router = express.Router();
import * as musicianController from '../controllers/musicianController.mjs';

router.get('/', (req, res, next) => {
    console.log('GET /musician');
    musicianController.musicianList(req, res, next);
});
router.get('/create', (req, res, next) => {
    console.log('GET /musician/create');
    musicianController.createMusicianForm(req, res, next);
});
router.post('/create', (req, res, next) => {
    console.log('POST /musician/create');
    musicianController.createMusician(req, res, next);
});
router.get('/:id', (req, res, next) => {
    console.log(`GET /musician/${req.params.id}`);
    musicianController.musicianById(req, res, next);
});
router.get('/update/:id', (req, res, next) => {
    console.log(`GET /musician/update/${req.params.id}`);
    musicianController.updateMusicianForm(req, res, next);
});
router.post('/update/:id', (req, res, next) => {
    console.log(`POST /musician/update/${req.params.id}`);
    musicianController.updateMusician(req, res, next);
});
router.post('/delete/:id', (req, res, next) => {
    console.log(`POST /musician/delete/${req.params.id}`);
    musicianController.deleteMusician(req, res, next);
});

export default router; */

import { default as express } from "express";
import * as musicianController from "../controllers/musicianController.mjs";

const router = express.Router();


router.get("/", musicianController.musicianList);
router.get("/create", musicianController.createMusician);
router.get("/update/:id", musicianController.update_get);
router.post("/update/:id", musicianController.update_post);
router.get('/:id', musicianController.musicianById);
router.post('/delete/:id', musicianController.deleteMusician);

export default router;