const express = require('express')
const pg = require('pg')
const cors = require('cors')
const loginRoutes = require('./routes/loginRoutes')
const app = express()
const resourceRoutes = require('./routes/resourceRoutes')


app.use(cors())
app.use(express.static('./public'))
app.use(express.json())

app.use(loginRoutes)
app.use(resourceRoutes)

app.listen(4000, ()=> {
    console.log('Server listening on port 4000...')
})