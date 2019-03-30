const request = require('supertest')
const app = require('../app')

jest.mock('../services/user.js')

const userService = require('../services/user')

//GET TEST
test('When making GET request to user.js if query is successful expect 200', done => {
    userService.read.mockImplementation(()=>{
        return Promise.resolve()
    })
    request(app)
    .get('/user/:user_id')
    .then(response => {
        expect(response.status).toBe(200)
        done()
    })
})


test('When making GET request to user-interests.js if query is unsuccessful expect 400', done => {
    userService.read.mockImplementation(()=>{
        return Promise.reject()
    })
    request(app)
    .get('/user/:user_id')
    .then(response => {
        expect(response.status).toBe(400)
        done()
    })
})

//PUT TEST
test('When making PUT request to user.js if query is successful expect 200', done => {
    userService.update.mockImplementation(()=>{
        return Promise.resolve()
    })
    request(app)
    .put('/user/:user_id')
    .then(response => {
        expect(response.status).toBe(200)
        done()
    })
})


test('When making PUT request to user-interests.js if query is unsuccessful expect 400', done => {
    userService.update.mockImplementation(()=>{
        return Promise.reject()
    })
    request(app)
    .put('/user/:user_id')
    .then(response => {
        expect(response.status).toBe(400)
        done()
    })
})

//DELETE TEST
test('When making DELETE request to user.js if query is successful expect 200', done => {
    userService.delete.mockImplementation(()=>{
        return Promise.resolve()
    })
    request(app)
    .delete('/user/:user_id')
    .then(response => {
        expect(response.status).toBe(200)
        done()
    })
})


test('When making DELETE request to user-interests.js if query is unsuccessful expect 400', done => {
    userService.delete.mockImplementation(()=>{
        return Promise.reject()
    })
    request(app)
    .delete('/user/:user_id')
    .then(response => {
        expect(response.status).toBe(400)
        done()
    })
})

//POST TEST
test('When making POST request to user.js if query is successful expect 200', done => {
    userService.create.mockImplementation(()=>{
        return Promise.resolve()
    })
    request(app)
    .post('/user/')
    .then(response => {
        expect(response.status).toBe(200)
        done()
    })
})


test('When making POST request to user-interests.js if query is unsuccessful expect 400', done => {
    userService.create.mockImplementation(()=>{
        return Promise.reject()
    })
    request(app)
    .post('/user/')
    .then(response => {
        expect(response.status).toBe(400)
        done()
    })
})