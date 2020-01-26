const http = require("http"); // import http from "http" (inny sposob naracji, ale w express nie dziala)
const app = require("./app");

const port = process.env.PORT || 3000; //umownie backend na 3000, a front na 5000

const server = http.createServer(app);

server.listen(port);