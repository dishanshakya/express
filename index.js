const express = require('express')
const pg = require('pg')
const {pool} = require('./database/db')
const app = express()


app.get('/', (req, res) => {
    res.send('hello nigga').status(200)
})
app.listen(4000, ()=> {
    console.log('Server listening on port 4000...')
})