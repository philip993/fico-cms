const express = require("express");
const router = express.Router();

const postCtrl = require("../controllers/postCt");

router.get("/", postCtrl.getAllBlogPosts);
router.get("/add-post", postCtrl.getBlogPostForm);
router.post("/", postCtrl.postBlogPost);
router.get("/:id", postCtrl.getOnePost);
router.delete("/:id", postCtrl.deleteBLogPost);
router.get("/edit/:id", postCtrl.editBlogPost);
router.put("/:id", postCtrl.putUpdateBLogPost);
//router.get("/posts/:page", postCtrl.pagination);

module.exports = router;
