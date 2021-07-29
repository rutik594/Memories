const express = require("express");
const router = express.Router();
const posts = require("../controllers/posts");

router.get("/posts", posts.getPosts);
router.post("/posts", posts.createPosts);
router.patch("/posts/update/:id", posts.updatePost);
router.delete("/posts/deletes/:id", posts.deletePost);
 router.patch("/posts/like/:id", posts.likePost);
module.exports = router;
