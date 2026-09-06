const express = require('express');
const router = express.Router();

// GET /api/buses
router.get('/', (req, res) => {
  res.json({ message: 'Get all buses' });
});

// POST /api/buses
router.post('/', (req, res) => {
  res.json({ message: 'Create bus' });
});

// GET /api/buses/:busNumber
router.get('/:busNumber', (req, res) => {
  res.json({ message: 'Get bus by number' });
});

// PUT /api/buses/:busNumber
router.put('/:busNumber', (req, res) => {
  res.json({ message: 'Update bus' });
});

// DELETE /api/buses/:busNumber
router.delete('/:busNumber', (req, res) => {
  res.json({ message: 'Delete bus' });
});

// PUT /api/buses/:busNumber/stop
router.put('/:busNumber/stop', (req, res) => {
  res.json({ message: 'Update current stop' });
});

// PUT /api/buses/:busNumber/loop
router.put('/:busNumber/loop', (req, res) => {
  res.json({ message: 'Reset for new loop' });
});

// PUT /api/buses/:busNumber/route
router.put('/:busNumber/route', (req, res) => {
  res.json({ message: 'Update route' });
});

module.exports = router;
