import { default as express } from "express";
import * as instrumentController from "../controllers/instrumentController.mjs";

const router = express.Router();


router.get("/", instrumentController.instrumentList);
router.get("/create", instrumentController.createInstrument);
router.get("/update/:id", instrumentController.update_get);
router.post("/update/:id", instrumentController.update_post);
router.get('/search', instrumentController.instrumentSearch);
router.get('/:id', instrumentController.instrumentById);
router.post('/delete/:id', instrumentController.deleteInstrument);
router.get('/verifyDelete/:id', instrumentController.verifyDelete);

export default router;
