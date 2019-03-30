const request = require('supertest');
const app = require('../app')
jest.mock('../services/followers.js')

const followersService = require('../services/followers')

//GET TEST
test('When making GET request to followers.js if query is successful expect 200', done => {
    followersService.getFollowers.mockImplementation(()=>{
        return Promise.resolve()
    })
    request(app)
    .get('/followers/:user_id')
    .then(response => {
        expect(response.status).toBe(200)
        done()
    })
})


test('When making GET request to followers.js if query is unsuccessful expect 400', done => {
    followersService.getFollowers.mockImplementation(()=>{
        return Promise.reject()
    })
    request(app)
    .get('/followers/:user_id')
    .then(response => {
        expect(response.status).toBe(400)
        done()
    })
})

//POST TEST
test('When making POST request to followers.js if query is successful expect 200', done => {
    followersService.follow.mockImplementation(()=>{
        return Promise.resolve()
    })
    request(app)
    .post('/followers/:user_id')
    .then(response => {
        expect(response.status).toBe(200)
        done()
    })
})

test('When making POST request to followers.js if query is unsuccessful expect 400', done => {
    followersService.follow.mockImplementation(()=>{
        return Promise.reject()
    })
    request(app)
    .post('/followers/:user_id')
    .then(response => {
        expect(response.status).toBe(400)
        done()
    })
})

//DELETE TEST
test('When making DELETE request to followers.js if query is successful expect 200', done => {
    followersService.unfollow.mockImplementation(()=>{
        return Promise.resolve()
    })
    request(app)
    .delete('/followers/:user_id')
    .then(response => {
        expect(response.status).toBe(200)
        done()
    })
})

test('When making DELETE request to followers.js if query is unsuccessful expect 400', done => {
    followersService.unfollow.mockImplementation(()=>{
        return Promise.reject()
    })
    request(app)
    .delete('/followers/:user_id')
    .then(response => {
        expect(response.status).toBe(400)
        done()
    })
})

