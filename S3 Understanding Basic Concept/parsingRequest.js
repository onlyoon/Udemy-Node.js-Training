const http = require('http');
const fs = require("fs");

// 익명 함수는 들어오는 모든 요청에 따라 실행됨
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write("<html>");
        res.write("<head><title>Enter Message</title></head>");
        res.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>");
        res.write("</html>");
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFileSync("message.txt", message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader("Content-Type", 'text/html');
    res.write("<html>");
    res.write("<head><title>hi new website</title></head>");
    res.write("<body><h1>hi new website</h1></body>");
    res.write("</html>");
    res.end();
});

// 3000포트 번호를 사용해 응답을 받음
server.listen(3000);