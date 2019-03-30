const request = require('supertest')
const app = require('../app')

jest.mock('../services/interests.js')

const interestsService = require('../services/interests')

//GET TEST
test('When making GET request to interests.js if query is successful expect 200', done => {
    interestsService.getInterests.mockImplementation(()=>{
        return Promise.resolve()
    })
    request(app)
    .get('/interests/')
    .then(response => {
        expect(response.status).toBe(200)
        done()
    })
})


test('When making GET request to interests.js if query is unsuccessful expect 400', done => {
    interestsService.getInterests.mockImplementation(()=>{
        return Promise.reject()
    })
    request(app)
    .get('/interests/')
    .then(response => {
        expect(response.status).toBe(400)
        done()
    })
})

