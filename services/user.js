const db = require('../services/dbConnect')

const userService = {}

userService.create = (username,email,token,avatar) => {
    return db.none('INSERT INTO users (username,email,token,avatar) VALUES (${username},${email},${token},${avatar})',{username,email,token,avatar})
}

userService.read = (username) => {
    return db.one('SELECT id, username, avatar FROM users WHERE username=${username}',{username})
}

userService.readToken = (username) => {
    return db.one('SELECT token from users WHERE username=${username}',{username})
}

userService.updateToken = (username,token)=>{
    return db.none('UPDATE users SET token = ${token} WHERE username = ${username}', {username,token})
}

userService.update = (username,email,avatar)=>{
return db.none('UPDATE users SET username = ${username}, email=${email},avatar=${avatar} WHERE username=${username}',{username,email,avatar})
}

userService.delete = (username)=>{
    return db.none('DELETE FROM users WHERE username = ${username};',{username})
}

module.exports = userService