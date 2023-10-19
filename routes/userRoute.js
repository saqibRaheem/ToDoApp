const router = require('express').Router();
const controller = require('../controller/userController')

router.post('/register' , controller.Signup)
router.post('/login',controller.Login)







module.exports = router