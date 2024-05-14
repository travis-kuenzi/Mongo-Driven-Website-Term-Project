import express from 'express';

const router = express.Router();

// Get all instruments
router.get('/', (req, res) => {
  res.send('GET all instruments');
});

// Create a new instrument
router.post('/', (req, res) => {
  res.send('POST new instrument');
});

export default router;