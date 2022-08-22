//imports
const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes')

//prefix endpoint with /users
router.use('/users', userRoutes);
//prefix endpoint with /posts
router.use('/posts', postRoutes);
//prefix endpoint with /comments
router.use('/comments', commentRoutes)


//exports
module.exports = router;