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
const http = require("http");
const server = http.createServer((req, res, next) => {
    console.log(req.url);
    console.log(req.method);
    if (req.url == '/' && req.method == "GET") {
        res.write("Hello Node.js")
        res.end()
    } else if (req.url == "/about" && req.method == "POST") {
        let bufferData;
        req.on("data", (chunk) => {
            console.log(chunk);
            bufferData = chunk
        })
        req.on('end', () => {
            const converBufferData = JSON.parse(bufferData)
            console.log(converBufferData);
            res.write(JSON.stringify(converBufferData))
            res.end()
        })
    } else {
        res.write("404 Page Not Found")
        res.end() 
    }
})
server.listen(3000, () => {
    console.log("running.........");
})