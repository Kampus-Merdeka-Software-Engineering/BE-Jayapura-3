const connection = require('./index')
const sequelize = require('sequelize')

const favorit = connection.define("favorit",{
    id_favorit: {type: sequelize.DataTypes.INTEGER, primaryKey: true},
    id_sepatu: {type: sequelize.DataTypes.INTEGER},
},{
    freezeTableName: true,
    timestamps: false
})

module.exports = favorit