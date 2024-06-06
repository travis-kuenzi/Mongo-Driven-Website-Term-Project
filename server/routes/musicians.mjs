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