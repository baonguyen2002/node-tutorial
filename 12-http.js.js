const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  } else if (req.url === "/about") {
    res.end("Welcome to our about page");
  } else {
    //res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`<h1> Opps </h1>
      
      <p> We can't seem to find the page you're looking for</p>
      
      <a href="/"> back home </a>`);
  }
});

server.listen(5000);
