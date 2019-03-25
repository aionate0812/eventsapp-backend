const express = require('express')
const commentsRouter = express.Router()
const commentsService = require('../services/comments')

commentsRouter.post('/:username', (req,res)=>{
    const {username,event,body} = req.body
    commentsService.addComment(username,event,body)
    .then( r => {
        res.status(200)
        res.json({msg:'comment added', response:r})
    }, err => {
        res.status(400)
        res.json({msg:'comment could not be added'})
        console.log(err)
    })
})

commentsRouter.get('/:event', (req,res) => {
    const {event} = req.params
    commentsService.getComments(event).then(user => {
        res.send(user)
    }, err => {
        console.log(err)
    })
})

commentsRouter.delete('/:comment_id', (req,res) => {
    const {comment_id} = req.params
    commentsService.removeComment(comment_id).then(user => {
        res.send(user)
    }, err => {
        console.log(err)
    })
})


module.exports = commentsRouter