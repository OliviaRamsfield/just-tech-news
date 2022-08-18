//imports
const express = require('express')
const routes = require('./routes')
const sequelize = require('./config/connection')

const app = express()
const PORT = process.env.PORT || 3001

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//turn on routes
app.use(routes)

//turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'))
})

//Using force: true makes the database connection sync with the model definitions and associations. 
//Tables must re-create themselves if there are any association changes.
//Once you've made association changes it should return back to force: false so that tables don't drop each time on reload