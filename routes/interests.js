const express = require('express')
const interestsRouter = express.Router()
const interestsService = require('../services/interests')

interestsRouter.get('/', (req,res) => {
    
    interestsService.getInterests().then(user => {
        res.send(user)
    }, err => {
        console.log(err)
    }) 
})

module.exports = interestsRouter