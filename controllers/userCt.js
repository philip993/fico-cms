const bcrypt = require("bcryptjs");
const passport = require("passport");
const { User } = require("../models/User");

exports.getRegisterForm = (req, res) => {
  res.render("users/register");
};

exports.postRegister = (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    username: req.body.username,
    name: req.body.name,
    age: req.body.age
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) throw err;
      user.password = hash;

      user
        .save()
        .then(user => {
          res.redirect("/users/login");
        })
        .catch(er => {
          console.log(err);
          return;
        });
    });
  });
};

exports.getLoginForm = (req, res) => {
  res.render("users/login");
};

exports.postLogin = (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/posts",
    failureRedirect: "/users/login"
  })(req, res, next);
};

exports.getLogout = (req, res) => {
  req.logout();
  res.redirect("/");
};

exports.getProfile = (req, res) => {
  res.send("profle page");
};
