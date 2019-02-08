const express = require("express");
const router = express.Router();

const restCtrl = require("../controllers/restCt");

router.get("/", restCtrl.getHomepage);
router.get("/about", restCtrl.getAbout);
router.get("/contact", restCtrl.getContactUs);

module.exports = router;
