// const { userPage, aboutUser, userPost } = require("./controller/user")//ES5
import {aboutUser , userPage , userPost} from './controller/user.js'
import * as userController from './controller/user.js'
// const userController = require('./controller/user')

// const router = require("express").Router()//ES5

//ES6
import { Router } from 'express'
[
]
const router = Router()
// router.get("/", userController.userPage)

// router.get("/about", userController.aboutUser)

// router.post("/user", userController.userPost)
router.get("/", userPage)

router.get("/about", aboutUser)

router.post("/user", userPost)



// module.exports = router//ES5
export default router
