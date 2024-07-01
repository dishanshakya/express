const express = require('express')
const pg = require('pg')
const pool = require('./database/db')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.post('/login', async (req, res) => {
    const {email, password} = req.body
    const user = await pool.query('select email,password from users where email=$1', [email])
    if (user.rows.length && password == user.rows[0].password){
        res.sendStatus(200)
        console.log('success')
    }
    else {
        res.sendStatus(400)
        console.log('fail')

    }
})

app.listen(4000, ()=> {
    console.log('Server listening on port 4000...')
})