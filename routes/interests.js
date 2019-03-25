const express = require('express')
const interestsRouter = express.Router()
const interestsService = require('../services/interests')

interestsRouter.get('/', (req,res) => {
    interestsService.getInterests()
    .then(interests => {
        res.status(200)
        res.json({interests:interests})
    }, err => {
        res.status(400)
        res.json({msg:'Could not retrieve interests'})
        console.log(err)
    }) 
})

module.exports = interestsRouter