const Album = require('../database/albums')
const router = require('express').Router();

router.get('/albums',(req,res)=>{
    Album.findAll().then(albums=>{
        res.json(albums);
    })
})

router.get('/albums/:id',(req,res)=>{
    let id = req.params.id;
    Album.findByPk(id).then(album=>{
        res.json(album);
    })
})

router.post('/albums',(req,res)=>{
    let {releaseYear, title,duration,label} = req.body

    Album.create({
        title: title,
        duration: duration,
        releaseYear: releaseYear,
        label:label
    }).then( res.json({msg: "album has been created"}))
})

router.delete('/albums/:id',(req,res)=>{
    let id = req.params.id
    Album.destroy({
        where:{id:id}
    }).then(res.json({"msg":"User deleted"}))
})

router.put('/albums/:id', (req,res)=>{
    let id = req.params.id

    Album.update({})
})

module.exports = router