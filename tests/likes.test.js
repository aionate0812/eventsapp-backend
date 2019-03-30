const request = require('supertest')
const app = require('../app')

jest.mock('../services/likes.js')

const likesService = require('../services/likes')


//GET TEST
test('When making GET request to likes.js if query is successful expect 200', done => {
    likesService.getLikes.mockImplementation(()=>{
        return Promise.resolve()
    })
    request(app)
    .get('/likes/:user_id')
    .then(response => {
        expect(response.status).toBe(200)
        done()
    })
})


test('When making GET request to likes.js if query is unsuccessful expect 400', done => {
    likesService.getLikes.mockImplementation(()=>{
        return Promise.reject()
    })
    request(app)
    .get('/likes/:user_id')
    .then(response => {
        expect(response.status).toBe(400)
        done()
    })
})

//POST TEST
test('When making POST request to likes.js if query is successful expect 200', done => {
    likesService.like.mockImplementation(()=>{
        return Promise.resolve()
    })
    request(app)
    .post('/likes/:user_id')
    .then(response => {
        expect(response.status).toBe(200)
        done()
    })
})


test('When making POST request to likes.js if query is unsuccessful expect 400', done => {
    likesService.like.mockImplementation(()=>{
        return Promise.reject()
    })
    request(app)
    .post('/likes/:user_id')
    .then(response => {
        expect(response.status).toBe(400)
        done()
    })
})

//DELETE TEST
test('When making DELETE request to likes.js if query is successful expect 200', done => {
    likesService.unlike.mockImplementation(()=>{
        return Promise.resolve()
    })
    request(app)
    .delete('/likes/:user_id')
    .then(response => {
        expect(response.status).toBe(200)
        done()
    })
})


test('When making DELETE request to likes.js if query is unsuccessful expect 400', done => {
    likesService.unlike.mockImplementation(()=>{
        return Promise.reject()
    })
    request(app)
    .delete('/likes/:user_id')
    .then(response => {
        expect(response.status).toBe(400)
        done()
    })
})