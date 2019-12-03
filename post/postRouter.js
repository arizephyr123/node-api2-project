const express = require('express');

const router = express.Router();

//router.use(express.json());

router.get('/', (req, res) => {
    res.send('Hello World! Love, Ari');
});

router.post("/", (req, res) => {});
// valid 201, return new post
//If no body or title, 400, { errorMessage: "Please provide title and contents for the post." }
//else 500, { error: "There was an error while saving the post to the database" }

router.post("/:id/comments", (req, res) => {});
//valid 200, save in db, return new comment
//if id not found, 404, { message: "The post with the specified ID does not exist." }
//if no text, 400, { errorMessage: "Please provide text for the comment." }
//else 500, { error: "There was an error while saving the comment to the database" }

router.get("/", (req, res) => {});
//valid
//else 500, { error: "The posts information could not be retrieved." }

router.get("/:id", (req, res) => {});
//valid
//if id not found 404, { message: "The post with the specified ID does not exist." }
//else 500, { error: "The post information could not be retrieved." }

router.get("/:id/comments", (req, res) => {});
//valid
//if id not found 404, { message: "The post with the specified ID does not exist." }
//else 500, { error: "The comments information could not be retrieved." }

router.delete("/:id", (req, res) => {

});
//valid 204
//if id not found 404, { message: "The post with the specified ID does not exist." }
//else 500, { error: "The post could not be removed" }

router.put("/:id", (req, res) => {

});
//valid, 200, return update db, return updated post
// if id not found 404, { message: "The post with the specified ID does not exist." }
// if missing title or contents, 400, { errorMessage: "Please provide title and contents for the post." }
//else 5-- , { error: "The post information could not be modified." }

module.exports = router; // << export router