const express = require('express')
const likesRouter = express.Router()
const likesService = require('../services/likes')

likesRouter.get('/:user_id', (req,res) => {
    const {user_id} = req.params
    likesService.getLikes(user_id)
    .then(likes => {
        res.status(200)
        res.json({likes:likes})
    }, err => {
        res.status(400)
        res.json({msg:'Could not retrieve likes'})
        console.log(err)
    })
})

likesRouter.post('/:user_id', (req,res) => {
    const {user_id} = req.params
    const {event_id} = req.body
    likesService.like(user_id,event_id)
    .then(r => {
        res.status(200)
        res.json({msg:'Like success'})
    }, err => {
        res.status(400)
        res.json({msg:'Like failed'})
        console.log(err)
    })
})

likesRouter.delete('/:user_id', (req,res) => {
    const {user_id} = req.params
    const {event_id} = req.body
    likesService.unlike(user_id,event_id)
    .then(r => {
        res.status(200)
        res.json({msg:'Unlike success'})
    }, err => {
        res.status(400)
        res.json({msg:'Unlike failed'})
        console.log(err)
    })
})


module.exports = likesRouter