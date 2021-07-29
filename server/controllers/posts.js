const PostMessage = require("../Models/postMessage");
const mongoose = require("mongoose");
//creating posts
const createPosts = async (req, res) => {
  const { title, message, selectedFile, creator, tags } = req.body;
  console.log(req.body);
  console.log(req.body.message);
  const newPostMessage = new PostMessage({
    title,
    message,
    selectedFile,
    creator,
    tags,
  });

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
//getting all posts
const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    if (postMessages) {
      console.log(postMessages);
      res.status(200).json(postMessages);
    } else {
      res.send("empty");
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//update post
const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

  await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });
console.log("update", updatedPost);
  res.json(updatedPost);
};


//delete post
const deletePost = async (req, res) => {
  const { id } = req.params;
 
    try {
      if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No post with id: ${id}`);
      else {
        await PostMessage.findByIdAndDelete(id);
        res.status(200).json("deleted");
      }
    } catch (err) {
      res.status(500).json("server error");
    }
  
};
const likePost = async (req, res) => {
  const { id } = req.params;
console.l
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const post = await PostMessage.findById(id);
console.log(post)
  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );

  res.json(updatedPost);
};

module.exports = { getPosts, createPosts, updatePost,deletePost,likePost };