//install nodemon by using :- npm install nodemon --save-dev
const http=require("http");
const routes=require('./routes');
const server=http.createServer(routes);
server.listen(2001);



