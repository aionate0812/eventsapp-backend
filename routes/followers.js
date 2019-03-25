const express =require('express')
const followersRouter = express.Router()
const followersService = require('../services/followers')

followersRouter.get('/:user_id', (req,res) => {
    const {user_id} = req.params
    followersService.getFollowers(user_id)
    .then(followers => {
        res.status(200)
        res.json({followers:followers})
    }, err => {
        res.status(400)
        res.json({msg:'Error retrieving followers'})
        console.log(err)
    })
})

followersRouter.post('/:user_id', (req,res) => {
    const {user_id} = req.params
    const {followed_user_id} = req.body
    followersService.follow(user_id,followed_user_id)
    .then(r => {
        res.status(200)
        res.json({msg:'User followed'})
    }, err => {
        res.status(400)
        res.json({msg:'Error following user'})
        console.log(err)
    })
})

followersRouter.delete('/:user_id', (req,res) => {
    const {user_id} = req.params
    const {unfollowed_user_id} = req.body
    followersService.unfollow(user_id,unfollowed_user_id)
    .then(r => {
        res.status(200)
        res.json({msg:'User unfollowed'})
    }, err => {
        res.status(400)
        res.send({msg:'Error unfollowing user'})
        console.log(err)
    })
})

module.exports = followersRouter