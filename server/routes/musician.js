import express from 'express';

const router = express.Router();

// Get all musicians
router.get('/', (req, res) => {
  res.send('GET all musicians');
});

// Create a new musician
router.post('/', (req, res) => {
  res.send('POST new musician');
});

export default router;