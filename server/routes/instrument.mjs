import {default as express} from 'express';

const router = express.Router();
export default router;

// Handle / (within /instrument )
router.get('/', (req, res) => {
  res.send('This will be the instrument page!');
});

/* // Create a new instrument
router.post('/', (req, res) => {
  res.send('POST new instrument');
}); */
