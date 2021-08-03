const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,

  likes: { type: [String], default: [] },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
const postMessage=mongoose.model('Posts',postSchema)
module.exports=postMessage