const express = require("express");
const router = express.Router();
const Post = require("../../model/Post");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  Post.find({}).then((posts) => {
    res.status(200).json(posts);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Post.findById(id).then((post) => {
    return res.status(200).json(post);
  });
});

router.post("/create", (req, res) => {
  const { title, description, imageUrl } = req.body;
  console.log(req.headers);
  const token = req.headers.token.split(" ")[1];
  const decoded = jwt.verify(token, "yoursecret");

  const userId = decoded._id;

  if (title === "" || description === "" || imageUrl === "") {
    return res.status(400).json({
      msg: "Please fill all the inputs.",
    });
  }
  const newPost = new Post({
    title,
    description,
    imageUrl,
    likes: [],
    comments: [],
    author: userId,
  });

  newPost.save().then(() => {
    return res.status(201).json({
      success: true,
      msg: "Post Created Successfully.",
    });
  });
});

router.put("/edit/:id", (req, res) => {
  const { title, description, imageUrl } = req.body;
  const id = req.params.id;

  if (title === "" || description === "" || imageUrl === "") {
    return res.status(400).json({
      msg: "Please fill all the inputs.",
    });
  }

  Post.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        return res.status(404).json({
          msg: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`,
        });
      } else return res.json({ msg: "Post was updated successfully." });
    })
    .catch((err) => {
      return res.status(500).json({
        msg: `Error updating post with id: ${id}`,
      });
    });
});

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  Post.findByIdAndRemove(id)
    .then(() => {
      return res.status(200).json({ msg: "Post was deleted successfully." });
    })
    .catch((err) => {
      return res.status(500).json({
        msg: `Error deleting post with id: ${id}`,
      });
    });
});

router.get("/like/:id", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, "yoursecret");
  const userId = decoded._id;

  const id = req.params.id;
  Post.findById(id)
    .then((post) => {
      post.likes.push(userId);
      post.save();
    })
    .then(() => {
      return res.status(200).json({ msg: "Post Liked." });
    })
    .catch((err) => {
      return res.status(500).json({
        msg: `Error deleting post with id: ${id}`,
      });
    });
});

module.exports = router;
