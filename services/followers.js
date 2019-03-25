const db = require('../services/dbConnect')

const followersService = {}


followersService.getFollowers = (user) => {
    return db.many('SELECT person_being_followed_id FROM followers WHERE person_whos_following_id=${user}',{user})
}
followersService.follow = (user, followed_user) => {
    return db.none('INSERT INTO followers (person_whos_following_id,person_being_followed_id) VALUES (${user}, ${followed_user})', {user,followed_user})
}

followersService.unfollow = (user, unfollowed_user) => {
    return db.none('DELETE FROM followers WHERE person_whos_following_id=${user} AND person_being_followed_id=${unfollowed_user}', {user, unfollowed_user})
}

module.exports = followersService