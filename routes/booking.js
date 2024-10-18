const express = require('express');
const { Seat, User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const router = express.Router();

// // User Registration
// router.post('/register', async (req, res) => {
//     const { username, password } = req.body;
    
//     try {
//         const user = await User.create({ username, password });
//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
//         res.status(400).json({ message: 'Error registering user', error });
//     }
// });

// // User Login
// router.post('/login', async (req, res) => {
//     const { username, password } = req.body;
    
//     const user = await User.findOne({ where: { username } });
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     const validPassword = await bcrypt.compare(password, user.password);
//     if (!validPassword) return res.status(400).json({ message: 'Invalid password' });

//     // Generate JWT
//     const token = jwt.sign({ id: user.id, username: user.username }, config.jwtSecret, { expiresIn: '1h' });
//     res.json({ message: 'Login successful', token });
// });

// Book Seats (requires authentication)
router.post('/book', async (req, res) => {
    const { num_seats } = req.body;

    try {
        // Fetch available seats
        const availableSeats = await Seat.findAll({
            where: { is_booked: false },
            limit: num_seats,
            order: [['row_number', 'ASC'], ['seat_number', 'ASC']]
        });

        if (availableSeats.length < num_seats) {
            return res.status(400).json({ message: 'Not enough seats available' });
        }

        // Book the seats
        for (let seat of availableSeats) {
            seat.is_booked = true;
            await seat.save();
        }

        res.json({ message: `Successfully booked ${num_seats} seats`, seats: availableSeats });
    } catch (error) {
        res.status(500).json({ message: 'Error booking seats', error });
    }
});

// Middleware to authenticate JWT
// function authenticateToken(req, res, next) {
//     const token = req.headers['authorization'];
//     if (!token) return res.status(401).json({ message: 'Access denied, token missing!' });

//     jwt.verify(token, config.jwtSecret, (err, user) => {
//         if (err) return res.status(403).json({ message: 'Invalid token' });

//         req.user = user;
//         next();
//     });
// }

module.exports = router;
