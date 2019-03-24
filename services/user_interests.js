const db = require('../services/dbConnect')

const userInterestsService = {}

userInterestsService.addInterest = (user,interest) => {
    return db.none('INSERT INTO user_interested (user_id, interests_id) VALUES (${user},${interest})',{user,interest})
}

userInterestsService.getInterest = (user) => {
    return db.many('SELECT interests_id FROM user_interested WHERE user_id=${user}',{user})
}

userInterestsService.deleteInterest = (user,interest) => {
    return db.none('DELETE FROM user_interested WHERE user_id=${user} AND interest_id=${interest}', {user,interest})
}

module.exports = userInterestsService
