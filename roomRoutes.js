const express = require('express');
const router = express.Router();
const { getRooms, addRoom, updateRoom, deleteRoom } = require('../controllers/roomController');

// Define routes
router.get('/', getRooms);
router.post('/', addRoom);
router.put('/:id', updateRoom);
router.delete('/:id', deleteRoom);
console.log({ getRooms, addRoom, updateRoom, deleteRoom });

module.exports = router;
