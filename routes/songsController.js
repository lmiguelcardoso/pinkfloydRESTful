const router = require('express').Router();
const Song = require('../database/songs')


router.get('/songs',(req,res)=>{
    Song.findAll().then(songs=>{
        res.json(songs)
    })
})

router.get('/songs/:id',(req,res)=>{
    let id = req.params.id
    Song.findByPk(id).then(songs=>{
        res.json(songs)
    })
})

router.post('/songs',(req,res)=>{
    let {title, duration, yt_url,albumId} = req.body

    Song.create({
        title:title,
        duration:duration,
        yt_url:yt_url,
        albumId:albumId
    }).then(res.json({"msg":"song has been created"}))
})

router.delete('/songs/:id',(req,res)=>{
    let id = req.params.id;
    Song.destroy({
        where:{id:id}
    }).then(res.json({msg:"user deleted"}))
})

module.exports = router