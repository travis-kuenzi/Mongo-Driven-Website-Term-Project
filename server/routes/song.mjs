import {default as express} from 'express';

const router = express.Router();
export default router;

// Handle / (within /song)
router.get('/', (req, res) => {
  res.send('This will be the songs page');
});


/* // Create a new song
router.post('/', (req, res) => {
  res.send('POST new song');
}); */
