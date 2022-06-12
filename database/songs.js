const database = require('./db');
const Sequelize = require('sequelize')
const Album = require('./albums')

const Song = database.define('songs',{
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    duration:{
        type: Sequelize.STRING,
        allowNull: false
    }
})




module.exports = Song