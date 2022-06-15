const express = require('express');
const app = express();
const songsController = require('./routes/songsController')
const albumsController = require('./routes/albumsController')
const bodyParser = require('body-parser')
const cors = require('cors')


app.use(cors())

const Album = require('./database/albums')
const Song = require('./database/songs')

Album.hasMany(Song)
Song.belongsTo(Album)
Album.sync()
Song.sync()

app.use(bodyParser.json())

app.use('/',songsController)
app.use('/',albumsController)





app.listen(3000, ()=>{
    console.log("server running on 3000 port")
})