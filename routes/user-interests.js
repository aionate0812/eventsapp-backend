const express = require('express')
const userInterestsRouter = express.Router()
const userInterestsService = require('../services/user_interests')

userInterestsRouter.get('/:user_id', (req,res) => {
    const {user_id} = req.params
    userInterestsService.getInterest(user_id).then(user => {
        res.send(user)
    }, err => {
        console.log(err)
    })
})

userInterestsRouter.post('/:user_id', (req,res) => {
    const {user_id} = req.params
    const {interest_id} = req.body
    userInterestsService.addInterest(user_id,interest_id).then(user => {
        res.send(user)
    }, err => {
        console.log(err)
    })
})

userInterestsRouter.delete('/:user_id', (req,res) => {
    const {user_id} = req.params
    const {interest_id} = req.body
    userInterestsService.deleteInterest(user_id,interest_id).then(user => {
        res.send(user)
    }, err => {
        console.log(err)
    })
})

module.exports = userInterestsRouter