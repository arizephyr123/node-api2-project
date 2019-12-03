const express = require('express');
const postRoutes = require('../post/postRoutes.js');
const port = 5001;

const server = express();
server.use("/posts", postRoutes);
server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello World! Love, Ari');
});

server.post("/api/posts", (req, res) => {});
// valid 201, return new post
//If no body or title, 400, { errorMessage: "Please provide title and contents for the post." }
//else 500, { error: "There was an error while saving the post to the database" }

server.post("/api/posts/:id/comments", (req, res) => => {});
//valid 200, save in db, return new comment
//if id not found, 404, { message: "The post with the specified ID does not exist." }
//if no text, 400, { errorMessage: "Please provide text for the comment." }
//else 500, { error: "There was an error while saving the comment to the database" }

server.get("/api/posts", (req, res) => {});
//valid
//else 500, { error: "The posts information could not be retrieved." }

server.get("/api/posts/:id", (req, res) => {});
//valid
//if id not found 404, { message: "The post with the specified ID does not exist." }
//else 500, { error: "The post information could not be retrieved." }

server.get("/api/posts/:id/comments", (req, res) => {});
//valid
//if id not found 404, { message: "The post with the specified ID does not exist." }
//else 500, { error: "The comments information could not be retrieved." }

server.delete("/api/posts/:id", (req, res) => {

});
//valid 204
//if id not found 404, { message: "The post with the specified ID does not exist." }
//else 500, { error: "The post could not be removed" }

server.put("api/posts/:id", (req, res) => {

});
//valid, 200, return update db, return updated post
// if id not found 404, { message: "The post with the specified ID does not exist." }
// if missing title or contents, 400, { errorMessage: "Please provide title and contents for the post." }
//else 5-- , { error: "The post information could not be modified." }




server.listen(port, () => {
console.log(`Server listening on port: ${port}.`)
});