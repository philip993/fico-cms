const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 30
  },
  password: {
    type: String,
    required: true,
    minlength: 4
  },
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 100
  },
  age: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  date: {
    type: Date,
    default: Date.now
  },
  isAdmin: {
    type: Boolean,
    default: true
  }
});

const User = mongoose.model("User", userSchema);

exports.User = User;
