const express = require('express');
const router = express.Router();

// Get all orders
router.get('/', async (req, res) => {
    try {
        res.json({ message: 'Get orders route' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
