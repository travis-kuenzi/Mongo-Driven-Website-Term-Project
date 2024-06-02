import express from 'express';
const router = express.Router();
import * as genreController from '../controllers/genreController.mjs';

router.get('/', (req, res, next) => {
    console.log('GET /genre');
    genreController.genreList(req, res, next);
});
router.get('/create', (req, res, next) => {
    console.log('GET /genre/create');
    genreController.createGenreForm(req, res, next);
});
router.post('/create', (req, res, next) => {
    console.log('POST /genre/create');
    genreController.createGenre(req, res, next);
});
router.get('/:id', (req, res, next) => {
    console.log(`GET /genre/${req.params.id}`);
    genreController.genreById(req, res, next);
});
router.get('/update/:id', (req, res, next) => {
    console.log(`GET /genre/update/${req.params.id}`);
    genreController.updateGenreForm(req, res, next);
});
router.post('/update/:id', (req, res, next) => {
    console.log(`POST /genre/update/${req.params.id}`);
    genreController.updateGenre(req, res, next);
});
router.post('/delete/:id', (req, res, next) => {
    console.log(`POST /genre/delete/${req.params.id}`);
    genreController.deleteGenre(req, res, next);
});

export default router;