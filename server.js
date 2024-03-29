// npm init -y
// npm i json-server
// create server.js
// copy template to server.js
// node server.js
//make one file    .gitignore  and under that file write  /node_modules

const PORT = process.env.PORT || 3000;
const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);
server.listen(PORT, () =>
  console.log(`JSON Server is running on port ${PORT}`)
);