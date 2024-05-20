import {default as express} from 'express';

const router = express.Router();
export default router;

// Handle / ( within /user )
router.get('/', (req, res) => {
  res.send('This will be the genre page');
});

/* // Create a new genre
router.post('/', (req, res) => {
  res.send('POST new genre');
}); */
