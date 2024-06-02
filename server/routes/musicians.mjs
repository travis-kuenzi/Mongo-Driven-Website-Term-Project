import express from 'express';
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

export default router;