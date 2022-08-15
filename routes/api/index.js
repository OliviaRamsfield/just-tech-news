//imports
const router = require('express').Router();
const userRoutes = require('./user-routes.js');

//prefix endpoint with /users
router.use('/users', userRoutes);


//exports
module.exports = router;