import {default as express} from 'express';

const router = express.Router();
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
