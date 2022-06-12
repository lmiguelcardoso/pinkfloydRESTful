const express = require('express');
const app = express();
const routes = require('./routes')

const db = require('./database/db')
const Album = require('./database/albums')
const Song = require('./database/songs')

app.use('/',routes)

app.listen(3000, ()=>{
    console.log("server running on 3000 port")
})