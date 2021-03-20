const express = require("express");
const router = express.Router();
const Post = require("../../model/Post");
const User = require("../../model/User");
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
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, "yoursecret");
  const userId = decoded._id;

  if (title === "" || description === "" || imageUrl === "") {
    return res.status(400).json({
      msg: "Please fill all the inputs.",
    });
  }

  if (description.length < 50) {
    return res.status(400).json({
      msg: "Description must be at least 30 characters long.",
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
      } else
        return res.json({
          success: true,
          msg: "Post was updated successfully.",
        });
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
      const likesArray = post.likes;
      if (likesArray.includes(userId)) {
        return res.status(500).json({
          msg: `Post already liked.`,
        });
      }
      post.likes.push(userId);
      post.save();
    })
    .then(() => {
      return res.status(200).json({ msg: "Post Liked." });
    })
    .catch((err) => {
      return res.status(500).json({
        msg: `Post with id: ${id} was NOT liked successfully.`,
      });
    });
});

router.get("/unlike/:id", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, "yoursecret");
  const userId = decoded._id;

  const id = req.params.id;

  Post.findById(id)
    .then((post) => {
      const likesArray = post.likes;
      if (!likesArray.includes(userId)) {
        return res.status(500).json({
          msg: `Post is not liked.`,
        });
      }
      const index = likesArray.indexOf(userId);
      post.likes.splice(index, 1);
      post.save();
    })
    .then(() => {
      return res.status(200).json({ msg: "Post Liked." });
    })
    .catch((err) => {
      return res.status(500).json({
        msg: `Post with id: ${id} was NOT liked successfully.`,
      });
    });
});

router.put("/comment/:id", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, "yoursecret");

  const id = req.params.id;

  const newComment = {
    comment: req.body.comment,
    author: {
      userId: decoded._id,
      username: decoded.username,
      name: decoded.name,
      email: decoded.email,
    },
  };

  Post.findById(id)
    .then((post) => {
      post.comments.push(newComment);
      post.save();
    })
    .then(() => {
      return res.status(200).json({ msg: "Comment Successful." });
    })
    .catch((err) => {
      return res.status(500).json({
        msg: `Post with id: ${id} was NOT commented successfully.`,
      });
    });
});

module.exports = router;
