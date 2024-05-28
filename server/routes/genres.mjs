import {default as express} from 'express';

const router = express.Router();
export default router;

import * as genreController from "../controllers/genreController.mjs";

// Handle / (within /genre )
router.get('/', genreController.genreList);
router.get('/genre/:id', genreController.genreById);
/* router.get("/genre/create", genreController.creategenre);
router.get("/genre/update/:id", genreController.update_get);
router.post("/genre/update/:id", genreController.update_post);

// Create a new genre
router.post('/', (req, res) => {
  res.send('POST new genre');
}); */
