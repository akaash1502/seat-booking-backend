// module.exports = {
//     db: {
//         username: 'booking_db_pfaz_user',
//         password: 'Krf45npc9z0tDq3nMGlzCklycirQs4uX',
//         database: 'booking_db_pfaz',
//         host: 'postgresql://booking_db_pfaz_user:Krf45npc9z0tDq3nMGlzCklycirQs4uX@dpg-csclv4d6l47c73cpptq0-a.singapore-postgres.render.com',
//         dialect: 'postgres'
//     },
// };
module.exports = {
    db: {
        username: 'booking_db_pfaz_user',
        password: 'Krf45npc9z0tDq3nMGlzCklycirQs4uX',
        database: 'booking_db_pfaz',
        host: 'dpg-csclv4d6l47c73cpptq0-a.singapore-postgres.render.com',
        dialect: 'postgres',
        port: 5432, // Postgres default port
        dialectOptions: {
            ssl: {
                require: true,  // Enforces SSL
                rejectUnauthorized: false  // This skips the certificate verification. You can adjust this for stricter security.
            }
        }
    },
};

