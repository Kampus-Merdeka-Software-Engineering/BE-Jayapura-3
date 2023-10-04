const connection = require('./index')
const sequelize = require('sequelize')

const sepatu = connection.define("sepatu",{
    id_sepatu: {type: sequelize.DataTypes.INTEGER, primaryKey: true},
    nama_sepatu: {type: sequelize.DataTypes.STRING},
    harga_sepatu: {type: sequelize.DataTypes.INTEGER},
    gambar_sepatu: {type: sequelize.DataTypes.STRING},
    brand :{type: sequelize.DataTypes.STRING},
    jenis_sepatu:{type: sequelize.DataTypes.STRING},
    detail_sepatu:{type: sequelize.DataTypes.TEXT},
    deskripsi:{type: sequelize.DataTypes.STRING},
},{
    freezeTableName: true,
    timestamps: false
})

module.exports = sepatu