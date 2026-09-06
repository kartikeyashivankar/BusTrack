const express = require('express');
const router = express.Router();

// GET /api/trips
router.get('/', (req, res) => {
  res.json({ message: 'Get all trips' });
});

// GET /api/trips/:busNumber
router.get('/:busNumber', (req, res) => {
  res.json({ message: 'Get trips by bus number' });
});

// POST /api/trips
router.post('/', (req, res) => {
  res.json({ message: 'Create trip' });
});

module.exports = router;
