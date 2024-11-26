const express = require('express');
const db = require('../config/db');
const router = express.Router();

// Login Route
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ?';
  db.execute(query, [email], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });

    if (results.length === 0 || results[0].password !== password) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    req.session.user = { id: results[0].id, email: results[0].email };
    res.status(200).json({ message: 'Login successful' });
  });
});

// Profile Route
router.get('/profile', (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'User not authenticated' });
  }

  const query = 'SELECT id, email FROM users WHERE id = ?';
  db.execute(query, [req.session.user.id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });

    res.status(200).json({ user: results[0] });
  });
});

// Logout Route
router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ error: 'Failed to log out' });
    res.status(200).json({ message: 'Logged out successfully' });
  });
});

module.exports = router;
