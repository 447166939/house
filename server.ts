var express = require("express");
var next = require("next");
var { createProxyMiddleware } = require("http-proxy-middleware");

var port = process.env.PORT || 3000;
var dev = process.env.NODE_ENV !== "production";
console.log("dev", dev);
var app = next({ dev });
var handle = app.getRequestHandler();
var isDevelopment = process.env.NODE_ENV !== "production";
app
  .prepare()
  .then(() => {
    var server = express();
    console.log("isdev", isDevelopment);
    if (isDevelopment) {
      console.log("useproxy");
      server.use(
        "/user/register",
        createProxyMiddleware({
          target: "http://42.192.157.113/:8080/",
          changeOrigin: true
        })
      );
    }
    server.all("*", (req: any, res: any) => {
      return handle(req, res);
    });

    server.listen(port, (err: any) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((err: any) => {
    console.log("Error:::::", err);
  });
export {}
