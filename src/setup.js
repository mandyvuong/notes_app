const httpServer = require("http-server");
const path = require("path");

const pathToHtmlAndJsFiles = path.join(__dirname, "path/from/current/dir/to/html/and/js/files");
const server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
server.listen(3000);