const db = require('../services/dbConnect')

const interestsService = {}


interestsService.getInterests = () => {
    return db.many('SELECT interest_type FROM interests')
}
interestsService.insert = (interest_type) => {
    return db.none('INSERT INTO interests (interest_type) VALUES (${interest_type})', {interest_type})
}

interestsService.delete = (interest_type) => {
    return db.none('DELETE FROM interests WHERE interest_type=${interest_type}', {interest_type})
}

module.exports = interestsService