//import the Sequelize constructor function
const Sequelize = require('sequelize');
//import MySQL login info
require('dotenv').config();

//create connection to our database, pass in your MySQL info
let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: "127.0.0.1",
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = sequelize;