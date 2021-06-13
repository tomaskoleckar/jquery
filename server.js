const express = require("express");
const http = require("http");
const path = require("path");
const app = express();
const server = http.createServer(app);

const PORT = 8080 || procces.env.PORT;


app.use(express.static(path.join(__dirname,"public")));


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
