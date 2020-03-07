/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const path = require("path");
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log("Server listening at port %d", port);
});

// Routing
app.use(express.static(path.join(__dirname, "dist")));
