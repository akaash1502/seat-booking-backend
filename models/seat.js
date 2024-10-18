module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');

    const Seat = sequelize.define('Seat', {
        seat_number: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        row_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        is_booked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    return Seat;
};
