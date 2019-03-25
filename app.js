const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./routes/user')
const commentsRouter = require('./routes/comments')
const followersRouter = require('./routes/followers')
const userInterestsRouter = require('./routes/user-interests')
const likesRouter = require('./routes/likes')
const interestsRouter = require('./routes/interests')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

app.use('/user', userRouter)
app.use('/comments', commentsRouter)
app.use('/followers', followersRouter)
app.use('/user_interests', userInterestsRouter)
app.use('/likes', likesRouter)
app.use('/interests', interestsRouter)

app.get('/',(req,res)=>{
    res.send('API ROOT')
})

module.exports = app