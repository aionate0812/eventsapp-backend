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
    commentsService.getComments(event)
    .then(comments => {
        res.status(200)
        res.json({comments:comments})
    }, err => {
        res.status(400)
        res.json({msg:'Could not get comments'})
        console.log(err)
    })
})

commentsRouter.delete('/:comment_id', (req,res) => {
    const {comment_id} = req.params
    commentsService.removeComment(comment_id)
    .then(r => {
        res.status(200)
        res.send({msg:'Comment deleted', response:r})
    }, err => {
        res.status(400)
        res.json({msg:'Error deleting the comment'})
        console.log(err)
    })
})

module.exports = commentsRouter