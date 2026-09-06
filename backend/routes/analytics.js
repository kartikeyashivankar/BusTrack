const express = require('express');
const router = express.Router();

// GET /api/analytics/overview
router.get('/overview', (req, res) => {
  res.json({ message: 'Get analytics overview' });
});

// GET /api/analytics/busiest-hours
router.get('/busiest-hours', (req, res) => {
  res.json({ message: 'Get busiest hours' });
});

// GET /api/analytics/:busNumber
router.get('/:busNumber', (req, res) => {
  res.json({ message: 'Get analytics by bus number' });
});

module.exports = router;
