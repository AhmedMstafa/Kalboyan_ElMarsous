// Working With incoming http requset

const http = require("http");

const server = http.createServer((request, response) => {
  let body = [];
  console.log(request.method, request.url);

  request.on("data", (chunk) => {
    body.push(chunk);
  });

  request.on("end", () => {
    body = Buffer.concat(body).toString();
    // console.log(body);
    let userName = "Unknown user";
    if (body) {
      userName = body.split("=")[1];
    }
    response.setHeader("Content-Type", "text/html");
    // response.write(`<h1>Hello there!</h1>`);
    response.write(
      `<h1>Hi ${userName}</h1><form method="POST" action="/"><input name="userName" type="text"><button type="submit">Send</button></form>`
    );
    console.log(userName);
    response.end();
  });
});

server.listen(3000);
