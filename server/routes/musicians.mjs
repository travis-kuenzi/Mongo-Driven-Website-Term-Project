import {default as express} from 'express';

const router = express.Router();
export default router;

import * as musicianController from "../controllers/musicianController.mjs";

// Handle / (within /musician )
router.get('/', musicianController.musicianList);
router.get('/:id', musicianController.musicianById);
/* router.get("/musician/create", musicianController.createmusician);
router.get("/musician/update/:id", musicianController.update_get);
router.post("/musician/update/:id", musicianController.update_post);

 // Create a new musician
router.post('/', (req, res) => {
  res.send('POST new musician');
}); 
 */