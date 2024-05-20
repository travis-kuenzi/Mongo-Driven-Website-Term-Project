import {default as express} from 'express';

const router = express.Router();
export default router;

// Handle / ( within /musician )
router.get('/', (req, res) => {
  res.send('This will be the musician page... eventually this will show an ejs rendering');
});

/* // Create a new musician
router.post('/', (req, res) => {
  res.send('POST new musician');
}); */
