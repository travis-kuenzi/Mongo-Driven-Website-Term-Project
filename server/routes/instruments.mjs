import express from 'express';
const router = express.Router();
import * as instrumentController from '../controllers/instrumentController.mjs';

router.get('/', (req, res, next) => {
    console.log('GET /instrument');
    instrumentController.instrumentList(req, res, next);
});
router.get('/create', (req, res, next) => {
    console.log('GET /instrument/create');
    instrumentController.createInstrumentForm(req, res, next);
});
router.post('/create', (req, res, next) => {
    console.log('POST /instrument/create');
    instrumentController.createInstrument(req, res, next);
});
router.get('/:id', (req, res, next) => {
    console.log(`GET /instrument/${req.params.id}`);
    instrumentController.instrumentById(req, res, next);
});
router.get('/update/:id', (req, res, next) => {
    console.log(`GET /instrument/update/${req.params.id}`);
    instrumentController.updateInstrumentForm(req, res, next);
});
router.post('/update/:id', (req, res, next) => {
    console.log(`POST /instrument/update/${req.params.id}`);
    instrumentController.updateInstrument(req, res, next);
});
router.post('/delete/:id', (req, res, next) => {
    console.log(`POST /instrument/delete/${req.params.id}`);
    instrumentController.deleteInstrument(req, res, next);
});

export default router;

import * as instrumentController from "../controllers/instrumentController.mjs";

// Handle / (within /instrument )
router.get('/', instrumentController.instrumentList);
router.get("/instrument/create", instrumentController.createInstrument);
router.get("/instrument/update/:id", instrumentController.update_get);
router.post("/instrument/update/:id", instrumentController.update_post);
router.get('/:id', instrumentController.instrumentById);


/* // Create a new instrument
router.post('/', (req, res) => {
  res.send('POST new instrument');
}); */
