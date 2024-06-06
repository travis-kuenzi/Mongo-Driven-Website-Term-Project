import { default as express } from "express";
import * as genreController from "../controllers/genreController.mjs";

const router = express.Router();


router.get("/", genreController.genreList);
router.get("/create", genreController.createGenre);
router.get("/update/:id", genreController.update_get);
router.post("/update/:id", genreController.update_post);
router.get('/:id', genreController.genreById);
router.post('/delete/:id', genreController.deleteGenre);

export default router;


