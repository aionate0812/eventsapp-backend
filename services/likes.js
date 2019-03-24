const db =require('../services/dbConnect')

const likesService = {}

likesService.getLikes = (event) => {
    return db.many('SELECT user_id FROM likes WHERE event_id=${event}', {event})
}

likesService.like = (user,event) => {
    return db.none('INSERT INTO likes (user_id, event_id) VALUES (${user},${event})', {user,event})
}

likesService.unlike = (user,event) => {
    return db.none('DELETE FROM likes where user_id = ${user} AND event_id=${event}', {user,event})
}

module.exports = likesService