const express = require("express");

const postRouter = require("../post/postRouter.js"); // << import router



const server = express();

server.get("/", (req, res) => {
res.send(`<h2>Welcome to API</h2>`);
});

server.use("/api/posts", postRouter); // << configure router

module.exports = server; // << export server






