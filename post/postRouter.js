const express = require("express");

const router = express.Router();
const db = require("../data/db.js");

router.use(express.json());

// router.get("/", (req, res) => {
//   res.send("In postRouter");
// });

router.post("/", (req, res) => {
  const { title, contents } = req.body;

  if (!title || !contents) {
    res.status(400).json({
      errorMessage: "Please provide title and contents for the post."
    });
  } else {
    db.find()
      .then(response => {
        console.log("POST to '/api/posts' successful");
        res.status(200).json(`{ Post added: ${title}, ${contents}`);
      })
      .catch(err => {
        console.log(console.log("POST to '/api/posts' error", err));
        res.status(500).json({
          error: "There was an error while saving the post to the database"
        });
      });
  }
});

// valid 201, return new post
//If no body or title, 400, { errorMessage: "Please provide title and contents for the post." }
//else 500, { error: "There was an error while saving the post to the database" }

router.post("/:id/comments", async (req, res) => {
  const id = req.params.id;
  const newComment = req.body;
  if (newComment.text.length < 1) {
    res
      .status(400)
      .json({ errorMessage: "Please provide text for the comment." });
  }
  await db
    .insertComment({ ...newComment, post_id: id })
    .then(response => {
      //if (response.id) {
      console.log("response,", response);
      res.status(200).json(newComment);
      //}
    })
    .catch(err => {
      console.log(err.code);
      if (err.code === "SQLITE_CONSTRAINT") {
        res
          .status(404)
          .json({ message: "The post with the specified ID does not exist." });
      } else {
        res.status(500).json({
          error: "There was an error while saving the comment to the database"
        });
      }
    });
});
//valid 200, save in db, return new comment
//if id not found, 404, { message: "The post with the specified ID does not exist." }
//if no text, 400, { errorMessage: "Please provide text for the comment." }
//else 500, { error: "There was an error while saving the comment to the database" }

router.get("/", (req, res) => {
  db.find()
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ error: "The posts information could not be retrieved." });
    });
});
//valid
//else 500, { error: "The posts information could not be retrieved." }

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  await db
    .findById(id)
    .then(response => {
      console.log(response, id);
      if (response[0]) {
        res.status(200).json(response);
      } else {
        res
          .status(404)
          .json({ message: "The post with the specified ID does not exist." });
      }
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ error: "The post information could not be retrieved." });
    });
});
//valid
//if id not found 404, { message: "The post with the specified ID does not exist." }
//else 500, { error: "The post information could not be retrieved." }

router.get("/:id/comments", (req, res) => {
 const id = req.params.id;
 db.findCommentById(id)
 .then(response => {
     if (response[0]){
         res.status(200).json(response);
     } else {
         res.status(404).json({ message: "The post with the specified ID does not exist." });
     }
 })
 .catch(err => {
     console.log(err);
     res.status(500).json({ error: "The comments information could not be retrieved." });
 })

});
//valid
//if id not found 404, { message: "The post with the specified ID does not exist." }
//else 500, { error: "The comments information could not be retrieved." }

router.delete("/:id", (req, res) => {});
//valid 204
//if id not found 404, { message: "The post with the specified ID does not exist." }
//else 500, { error: "The post could not be removed" }

router.put("/:id", (req, res) => {});
//valid, 200, return update db, return updated post
// if id not found 404, { message: "The post with the specified ID does not exist." }
// if missing title or contents, 400, { errorMessage: "Please provide title and contents for the post." }
//else 5-- , { error: "The post information could not be modified." }

module.exports = router; // << export router
