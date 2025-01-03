// create routs in express server

const express = require('express')

// create an object for router class of express 
const router = new express.Router()

const userController = require('../controller/userController')


const projectController = require("../controller/projectController")


const jwtMiddileware = require("../middlewares/jwtMiddileware")

const multerMiddilware=require('../middlewares/multerMiddileware')

// create route for register user (client first request)

router.post('/register', userController.userRegister)



// route for user login 
router.post('/login', userController.userLogin)


// route for add project 

router.post('/add-projects', jwtMiddileware, multerMiddilware.single('projectimg') , projectController.addProjects)









// export router 
module.exports = router