const express = require('express');
const router = express.Router();
const Song = require('./database/songs')



router.get('/', (req,res)=>{
    res.send("Hello world")
})


module.exports = router