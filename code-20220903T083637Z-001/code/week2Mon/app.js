//create  new folder
// open vs code
// create file app.js
//open treminal from ctr+`   => npm init -y
// http create server 
//npm i nodemon -g
//node app.js
//nodemon app.js
//nodemon
//npm run start
//npm run dev
//format file alt+shift+f
//localhost:3000
// const http = require("http");
// const server = http.createServer((req, res, next) => {
//     console.log(req.url);
//     console.log(req.method);
//     const { url, method } = req
//     if (url == '/' && method == "GET") {
//         res.write("Hello Node.js")
//         res.end()
//     } else if (url == "/about" && method == "POST") {
//         let bufferData;
//         req.on("data", (chunk) => {
//             console.log(chunk);
//             bufferData = chunk
//         })
//         req.on('end', () => {
//             const converBufferData = JSON.parse(bufferData)
//             console.log(converBufferData);
//             res.write(JSON.stringify(converBufferData))
//             res.end()
//         })
//     } else {
//         res.write("404 Page Not Found")
//         res.end()
//     }
// })

// function test(arg1){
//     return  arg1
// }
// console.log(test(10))

// const test = (arg1, arg2) => {
//     let total = arg1 * arg2
//     return total
// }
// console.log(test(10, 5))

// server.listen(3000, () => {
//     console.log("running.........");
// })



// ======================================Express.js=========================================
// const express = require("express");//ES5
// const userRouter  = require('./modules/user/user.router')//ES5
//ES6
import express from 'express'
import userRouter from './modules/user/user.router.js'


const app = express()

app.use(express.json())

app.use(userRouter)

app.listen(3000, () => {
    console.log("Running........... ");
})