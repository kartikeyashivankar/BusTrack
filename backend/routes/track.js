const express = require('express');
const router = express.Router();

// GET /api/track/:busNumber
router.get('/:busNumber', (req, res) => {
  res.json({ message: 'Get public track info' });
});

module.exports = router;
