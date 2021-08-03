const express = require("express");
const router = express.Router();
const posts = require("../controllers/posts");
const auth = require("../Auth/auth");
router.get("/posts", auth,posts.getPosts);
router.post("/posts", auth, posts.createPosts);
router.patch("/posts/update/:id", auth, posts.updatePost);
router.delete("/posts/deletes/:id", auth, posts.deletePost);
router.patch("/posts/like/:id", auth, posts.likePost);

module.exports = router;
