// const http = require('http');
// http.createServer((req,res,next)=>{
//     console.log(req.url);
//     console.log(req.method);
//     if (req.url=="/"&&req.method=="GET") {
//       console.log(req.body);
//       let bufferdata;
//       req.on("data",(chunk)=>{
//         console.log(chunk);
//      bufferdata=chunk;
//       })
//       req.on("end",()=>{
//         const converbufferData=JSON.parse(bufferdata)
//         console.log(converbufferData);
//         res.write(JSON.stringify(converbufferData))
//         res.end()
//       })
//     }else if (req.url=="/about"&&req.method=="GET"){
//         res.write("hello about")
//         res.end()
//     }else{
//         res.write("eror")
//         res.end()
//     }
// }).listen(3000,()=>{
//     console.log("ahmed");
// })

//======================================= express ============================

const express = require('express');
const userRouter= require('./modules/user/user.route')
const app = express()
app.use(express.json())


app.listen(3000, () => {
  console.log("run....");
})