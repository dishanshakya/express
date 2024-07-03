const pool = require('../database/db')

const login = async (req, res) => {
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
}

const register = async (req, res) => {
    const {username, email, password, gender} = req.body
    try{
        const store = await pool.query('insert into users(username, email, gender, password) \
        values ($1, $2, $3, $4)', [username, email, gender, password])
        res.sendStatus(200)
    }catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}
module.exports = {
    login,
    register
}