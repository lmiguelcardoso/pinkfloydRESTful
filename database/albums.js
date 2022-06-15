const database = require('./db');
const Sequelize = require('sequelize')
const Song = require('./songs')

const Album = database.define('albums',{
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    releaseYear: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    duration:{
        type: Sequelize.STRING,
        allowNull: false
    },
    label:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Album