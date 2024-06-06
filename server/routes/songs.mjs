import { default as express } from "express";
import * as songController from "../controllers/songController.mjs";

const router = express.Router();


router.get("/", songController.songList);
router.get("/create", songController.createSong);
router.get("/update/:id", songController.update_get);
router.post("/update/:id", songController.update_post);
router.get('/:id', songController.songById);
router.post('/delete/:id', songController.deleteSong);
router.get('/verifyDelete/:id', songController.verifyDelete);

export default router;