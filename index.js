const express = require('express');
const bodyParser = require('body-parser');
const bookingRoutes = require('./routes/booking');
const { sequelize } = require('./models');
const cors = require('cors');


const app = express();
app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json());

// Routes
app.use('/api', bookingRoutes);

// Sync the database and start the server
sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});
