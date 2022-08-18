//imports
const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');

//prefix endpoint with /users
router.use('/users', userRoutes);
router.use('/posts', postRoutes);


//exports
module.exports = router;