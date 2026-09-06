const express = require('express');
const router = express.Router();

// POST /api/auth/login
router.post('/login', (req, res) => {
  res.json({ message: 'Auth login endpoint' });
});

// POST /api/auth/logout
router.post('/logout', (req, res) => {
  res.json({ message: 'Auth logout endpoint' });
});

module.exports = router;
