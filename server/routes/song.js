import express from 'express';

const router = express.Router();

// Get all songs
router.get('/', (req, res) => {
  res.send('GET all songs');
});

// Create a new song
router.post('/', (req, res) => {
  res.send('POST new song');
});

export default router;