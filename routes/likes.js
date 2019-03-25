const express = require('express')
const likesRouter = express.Router()
const likesService = require('../services/likes')

likesRouter.get('/:user_id', (req,res) => {
    const {user_id} = req.params
    likesService.getLikes(user_id).then(user => {
        res.send(user)
    }, err => {
        console.log(err)
    })
})

likesRouter.post('/:user_id', (req,res) => {
    const {user_id} = req.params
    const {event_id} = req.body

    likesService.like(user_id,event_id).then(user => {
        res.send(user)
    }, err => {
        console.log(err)
    })
})

likesRouter.delete('/:user_id', (req,res) => {
    const {user_id} = req.params
    const {event_id} = req.body

    likesService.unlike(user_id,event_id).then(user => {
        res.send(user)
    }, err => {
        console.log(err)
    })
})


module.exports = likesRouter