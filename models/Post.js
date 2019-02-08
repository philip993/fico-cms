const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100
  },
  content: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 5000
  },
  date: {
    type: Date,
    default: Date.now
  },
  public: {
    type: Boolean,
    default: true
  }
});

const Post = mongoose.model("Post", postSchema);

exports.Post = Post;
