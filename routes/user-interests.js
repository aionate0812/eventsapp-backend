const express = require('express')
const userInterestsRouter = express.Router()
const userInterestsService = require('../services/user-interests')

userInterestsRouter.get('/:user_id', (req,res) => {
    const {user_id} = req.params
    userInterestsService.getInterest(user_id)
    .then(user_interest => {
        res.status(200)
        res.json({user_interest:user_interest})
    }, err => {
        res.status(400)
        res.json({msg:'Could not retrieve user interests'})
        console.log(err)
    })
})

userInterestsRouter.post('/:user_id', (req,res) => {
    const {user_id} = req.params
    const {interest_id} = req.body
    userInterestsService.addInterest(user_id,interest_id)
    .then(r => {
        res.status(200)
        res.json({msg:'Interest added'})
    }, err => {
        res.status(400)
        res.json({msg:'Failed to add interest'})
        console.log(err)
    })
})

userInterestsRouter.delete('/:user_id', (req,res) => {
    const {user_id} = req.params
    const {interest_id} = req.body
    userInterestsService.deleteInterest(user_id,interest_id)
    .then(r => {
        res.status(200)
        res.json({msg:'User interest deleted'})
    }, err => {
        res.status(400)
        res.json({msg:'User interest could not be deleted'})
        console.log(err)
    })
})

module.exports = userInterestsRouter