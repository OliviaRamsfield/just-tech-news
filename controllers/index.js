//imports
const router = require('express').Router()
const apiRoutes = require('./api')
const homeRoutes = require('./home-routes.js')

//prefix end point with /api
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

//make a request that doesn't exist and get a 404 error message
router.use((req, res) => {
    res.status(404).end()
})

//exports
module.exports = router