const request = require('supertest')
const app = require('../app')

jest.mock('../services/user-interests.js')

const userInterestsService = require('../services/user-interests')


//GET TEST
test('When making GET request to user-interests.js if query is successful expect 200', done => {
    userInterestsService.getInterest.mockImplementation(()=>{
        return Promise.resolve()
    })
    request(app)
    .get('/user_interests/:user_id')
    .then(response => {
        expect(response.status).toBe(200)
        done()
    })
})


test('When making GET request to user-interests.js if query is unsuccessful expect 400', done => {
    userInterestsService.getInterest.mockImplementation(()=>{
        return Promise.reject()
    })
    request(app)
    .get('/user_interests/:user_id')
    .then(response => {
        expect(response.status).toBe(400)
        done()
    })
})


//POST TEST
test('When making POST request to user-interests.js if query is successful expect 200', done => {
    userInterestsService.addInterest.mockImplementation(()=>{
        return Promise.resolve()
    })
    request(app)
    .post('/user_interests/:user_id')
    .then(response => {
        expect(response.status).toBe(200)
        done()
    })
})


test('When making POST request to user-interests.js if query is unsuccessful expect 400', done => {
    userInterestsService.addInterest.mockImplementation(()=>{
        return Promise.reject()
    })
    request(app)
    .post('/user_interests/:user_id')
    .then(response => {
        expect(response.status).toBe(400)
        done()
    })
})


//DELETE TEST
test('When making DELETE request to user-interests.js if query is successful expect 200', done => {
    userInterestsService.deleteInterest.mockImplementation(()=>{
        return Promise.resolve()
    })
    request(app)
    .delete('/user_interests/:user_id')
    .then(response => {
        expect(response.status).toBe(200)
        done()
    })
})


test('When making DELETE request to user-interests.js if query is unsuccessful expect 400', done => {
    userInterestsService.deleteInterest.mockImplementation(()=>{
        return Promise.reject()
    })
    request(app)
    .delete('/user_interests/:user_id')
    .then(response => {
        expect(response.status).toBe(400)
        done()
    })
})