const http = require('http');


// 익명 함수는 들어오는 모든 요청에 따라 실행됨
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", 'text/html');
    res.write("<html>");
    res.write("<head><title>hi new website</title></head>");
    res.write("<body><h1>hi new website</h1></body>");
    res.write("</html>");
    res.end();
});

// 3000포트 번호를 사용해 응답을 받음
server.listen(3000);