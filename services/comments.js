const db = require('../services/dbConnect')

const commentsService = {}

commentsService.addComment = (user,event,body) => {
    return db.none('INSERT INTO comments (user_id,event_id,message) VALUES (${user},${event},${body})', {user,event,body})
}

commentsService.getComments = (event) => {
    return db.many('SELECT id, user_id, message FROM comments WHERE event_id=${event}', {event})
}

commentsService.removeComment = (id) => {
    return db.none('DELETE FROM comments WHERE id=${id}', {id})
}

module.exports = commentsService