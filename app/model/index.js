const sequelize = require('sequelize')
const mysql = require('mysql2')

const connection = new sequelize.Sequelize('capstone_project', 'root', 'Lupasandi0.', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = connection

// const { Sequelize } = require('sequelize');
// require('dotenv').config()

// const sequelize = new Sequelize(process.env.MYSQLDATABASE, process.env.MYSQLUSER, process.env.MYSQLPASSWORD, {
//     host: process.env.MYSQLHOST,
//     port: process.env.MYSQLPORT,
//     dialect: 'mysql'
// });

// module.exports = sequelize;