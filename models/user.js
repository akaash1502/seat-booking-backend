// const bcrypt = require('bcryptjs');

// module.exports = (sequelize) => {
//     const { DataTypes } = require('sequelize');

//     const User = sequelize.define('AppUser', {
//         username: {
//             type: DataTypes.STRING,
//             unique: true,
//             allowNull: false
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false
//         }
//     });

//     // Hash password before saving
//     User.beforeCreate(async (user) => {
//         user.password = await bcrypt.hash(user.password, 10);
//     });

//     return User;
// };
