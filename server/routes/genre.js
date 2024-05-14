import express from 'express';

const router = express.Router();

// Get all genres
router.get('/', (req, res) => {
  res.send('GET all genres');
});

// Create a new genre
router.post('/', (req, res) => {
  res.send('POST new genre');
});

export default router;