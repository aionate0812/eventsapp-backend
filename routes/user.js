const express = require('express')
const userRouter = express.Router()
const userService = require('../services/user')

userRouter.get('/:username', (req,res)=>{
    const {username} = req.params
    userService.read(username).then(user => {
        res.send(user)
    },err => {
        console.log(err)
    })
})

userRouter.put('/:username', (req,res)=>{
    const {username} = req.params
    const {email,avatar} = req.body
    console.log(email,avatar)
    userService.update(username,email,avatar).then(user => {
        res.send(user)
    }, err => {
        console.log(err)
    })
})

userRouter.delete('/:username', (req,res)=>{
    const {username} = req.params
    userService.delete(username).then(user => {
        res.send(user)
    }, err => {
        console.log(err)
    })
})

userRouter.post('/', (req,res)=>{
    const {username,email,token,avatar} = req.body
    userService.create(username,email,token,avatar).then(user => {
        res.send(user)
    }, err => {
        console.log(err)
    })
})
module.exports = userRouter