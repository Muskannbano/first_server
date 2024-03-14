const http = require("http")

const PORT = 8081

http.createServer((req,res) => {
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("<h1>Hello World! -- everyone Muskan</h1>")
    res.end()
})
.listen(PORT,()=>{
    console.log(`NodeJs Srver is Up and Running Succesfully on Port ${PORT}`);
})
//http://localhost:8081
