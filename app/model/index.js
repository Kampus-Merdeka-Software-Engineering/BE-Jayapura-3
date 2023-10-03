const sequelize = require('sequelize')
const mysql = require('mysql2')

const connection = new sequelize.Sequelize('capstone_project', 'root', 'Lupasandi0.', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = connection