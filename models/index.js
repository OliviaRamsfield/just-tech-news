//import
const User = require('./User')
const Post = require('./Post')
const Vote = require('./Vote')

//create associations
//user can have many posts and user id in user table will reference FK user_id in post table
User.hasMany(Post, {
    foreignKey: 'user_id'
})

//must add reverse association from above - define relationship of Post model to the User - each post can belong to one user
Post.belongsTo(User, {
    foreignKey: 'user_id'
})

//user can have many votes on many different posts - connected through the vote model
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
  });

//a post can have many votes from many different users - connected through the vote model
Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
})

//directly connects vote model to user model
Vote.belongsTo(User, {
    foreignKey: 'user_id'
})

//directly connects vote model to post model
Vote.belongsTo(Post, {
    foreignKey: 'post_id'
})

//a user can have many different votes
User.hasMany(Vote, {
    foreignKey: 'user_id'
})

//a post can have many votes on it
Post.hasMany(Vote, {
    foreignKey: 'post_id'
})

//export
module.exports = { User, Post, Vote }