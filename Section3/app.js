const http = require('http');

const routes = require("./routes");

// 익명 함수는 들어오는 모든 요청에 따라 실행됨
const server = http.createServer(routes.handler);

// 3000포트 번호를 사용해 응답을 받음
server.listen(3000);