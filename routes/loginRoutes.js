const { Router } = require('express')
const {login, register} = require('../controller/loginController')

const router = Router()
router.post('/login', login)
router.post('/signup', register)

module.exports = router