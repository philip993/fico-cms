const { Post } = require("../models/Post");

exports.getAllBlogPosts = (req, res) => {
  Post.find({})
    .select()
    .sort("date")
    .then(posts => {
      res.render("posts/index", {
        posts: posts
      });
    });
};

exports.getBlogPostForm = (req, res) => {
  res.render("posts/add");
};

exports.postBlogPost = (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });

  post.save().then(res.redirect("/posts"));
};

exports.getOnePost = (req, res) => {
  const id = req.params._id;
  Post.findById(id).then(post => {
    res.render("posts/one", {
      post: post
    });
  });
};

exports.deleteBLogPost = (req, res) => {
  Post.findByIdAndRemove({ _id: req.params.id }).then(() => {
    res.redirect("/posts");
  });
};

exports.editBlogPost = (req, res) => {
  Post.findOne({ _id: req.params.id }).then(post => {
    res.render("posts/edit", {
      post: post
    });
  });
};

exports.putUpdateBLogPost = (req, res) => {
  Post.findOne({ _id: req.params.id }).then(post => {
    post.title = req.body.title;
    post.content = req.body.content;

    post.save().then(post => {
      res.redirect("/posts");
    });
  });
};

/*
exports.pagination = (req, res, next) => {
  let perPage = 2;
  let page = req.params.page || 1;

  Post.find({})
    .skip(perPage * page - perPage)
    .limit(perPage)
    .exe(function(err, products) {
      Post.count().exec(function(err, count) {
        if (err) return next(err);
        res.render("posts/index", {
          posts: posts,
          current: page,
          pages: Math.ceil(count / perPage)
        });
      });
    });
};
*/
