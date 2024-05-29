import {default as express} from 'express';

const router = express.Router();
export default router;

import * as songController from "../controllers/songController.mjs";

// Handle / (within /song )
router.get('/', songController.songList);
router.get('/:id', songController.songById);
/* router.get("/song/create", songController.createsong);
router.get("/song/update/:id", songController.update_get);
router.post("/song/update/:id", songController.update_post);

 // Create a new song
router.post('/', (req, res) => {
  res.send('POST new song');
});
 */