const request = require('supertest');
const app = require('../app')
jest.mock('../services/comments.js')

const commentService = require('../services/comments')

//GET TEST
test('When making GET request to comment.js if query is successful expect 200', done => {
    commentService.getComments.mockImplementation(()=>{
        return Promise.resolve()
    })
    request(app)
    .get('/comments/:event')
    .then(response => {
        expect(response.status).toBe(200)
        done()
    })
})

test('When making GET request to comment.js if query is unsuccessful expect 400', done => {
    commentService.getComments.mockImplementation(()=>{
        return Promise.reject()
    })
    request(app)
    .get('/comments/:event')
    .then(response => {
        expect(response.status).toBe(400)
        done()
    })
})

//POST TEST
test('When making POST request to comment.js if query is successful expect 200', done => {
    commentService.addComment.mockImplementation(()=>{
        return Promise.resolve()
    })
    request(app)
    .post('/comments/:username')
    .then(response => {
        expect(response.status).toBe(200)
        done()
    })
})

test('When making POST request to comment.js if query is unsuccessful expect 400', done => {
    commentService.addComment.mockImplementation(()=>{
        return Promise.reject()
    })
    request(app)
    .post('/comments/:username')
    .then(response => {
        expect(response.status).toBe(400)
        done()
    })
})


//DELETE TEST
test('When making DELETE request to comment.js if query is successful expect 200', done => {
    commentService.removeComment.mockImplementation(()=>{
        return Promise.resolve()
    })
    request(app)
    .delete('/comments/:username')
    .then(response => {
        expect(response.status).toBe(200)
        done()
    })
})

test('When making POST request to comment.js if query is unsuccessful expect 400', done => {
    commentService.removeComment.mockImplementation(()=>{
        return Promise.reject()
    })
    request(app)
    .delete('/comments/:username')
    .then(response => {
        expect(response.status).toBe(400)
        done()
    })
})
