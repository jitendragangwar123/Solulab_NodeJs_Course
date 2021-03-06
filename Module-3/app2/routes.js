const fs = require("fs");
const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==="/"){
        res.write("<html>");
        res.write("<head><title>Hello Jeetu</title></head>");
        res.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>");
        res.write("</html>");
        return res.end();
    }
    //redirecting Request
    if(url==='/message' && method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            //console.log(paredBody);
            const message=parsedBody.split("=")[1];
            //async behaviour of javascript
            fs.writeFile('message.txt',message,err =>{
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
        //fs.writeFileSync('message.txt','DUMMY');
        //give the info of meta data
        
    }
        res.setHeader("Content-Type","text/html");
        res.write("<html>");
        res.write("<head><title>My first NodeJS application</title></head>");
        res.write("<body><h1>Hello Jeetu how are u?</h1></body>")
        res.write("</html>");
        res.end();
};

module.exports=requestHandler;

//2nd approach
// module.exports={
//     handler=requestHandler,
//     someText="hii jeetu"
// };

//3rd approach
// exports.handler=requestHandler;
// exports.someText="hii jeetu";




