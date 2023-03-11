const express = require('express')
const router = express.Router()
const loginController = require('../controllers/loginController')

router.get('/', (req,res) => {
    res.clearCookie('token')
    res.render('login')
})

router.post('/login', loginController.login)
router.post('/register', loginController.register)


module.exports = router
