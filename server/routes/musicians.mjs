import express from 'express';
import multer from 'multer';
import { createMusician, create_post, deleteMusician, musicianById, musicianList, update_get, update_post, verifyDelete } from '../controllers/musicianController.mjs';

const upload = multer({ dest: 'public/uploads/' });
const router = express.Router();

router.get('/', musicianList);
router.get('/create', createMusician);
router.post('/create', upload.single('imageUpload'), create_post);
router.get('/update/:id', update_get);
router.post('/update/:id', upload.single('imageUpload'), update_post);
router.get('/verifyDelete/:id', verifyDelete);
router.post('/:id/delete', deleteMusician);
router.get('/:id', musicianById);

export default router;