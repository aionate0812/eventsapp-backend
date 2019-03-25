const express = require('express')
const userRouter = express.Router()
const userService = require('../services/user')

userRouter.get('/:username', (req,res)=>{
    const {username} = req.params
    userService.read(username)
    .then(user => {
        res.status(200)
        res.json({user:user})
    },err => {
        res.status(400)
        res.json({msg:'Could not retrieve user'})
        console.log(err)
    })
})

userRouter.put('/:username', (req,res)=>{
    const {username} = req.params
    const {email,avatar} = req.body
    console.log(email,avatar)
    userService.update(username,email,avatar).then(r => {
        res.status(200)
        res.json({msg:'User updated'})
    }, err => {
        res.status(400)
        res.json({msg:'Failed to update user'})
        console.log(err)
    })
})

userRouter.delete('/:username', (req,res)=>{
    const {username} = req.params
    userService.delete(username)
    .then(r => {
        res.status(200)
        res.json({msg:'User deleted'})
    }, err => {
        res.status(400)
        res.json({msg:'Failed to delete user'})
        console.log(err)
    })
})

userRouter.post('/', (req,res)=>{
    const {username,email,token,avatar} = req.body
    userService.create(username,email,token,avatar)
    .then(r => {
        res.status(200)
        res.json({msg:'User created'})
    }, err => {
        res.status(400)
        res.json({msg:'Failed to create user'})
        console.log(err)
    })
})
module.exports = userRouter