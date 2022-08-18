//import
const User = require('./User')
const Post = require('./Post')

//create associations
//user can have many posts and user id in user table will reference FK user_id in post table
User.hasMany(Post, {
    foreignKey: 'user_id'
})

//must add reverse association from above - define relationship of Post model to the User - each post can belong to one user
Post.belongsTo(User, {
    foreignKey: 'user_id'
})

//export
module.exports = { User, Post }