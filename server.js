const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const passport = require("passport");

const posts = require("./routes/posts");
const users = require("./routes/users");
const rest = require("./routes/rest");

mongoose.Promise = global.Promise;
/* compass - home
mongoose
  .connect("mongodb://localhost/new-blog", { useNewUrlParser: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log("Could not connect to mongoDB"));
*/
// ofice laptop
mongoose.connect(
  "mongodb+srv://rest-shop-901:brando902part12@node-rest-api-aulzl.mongodb.net/new-blog?retryWrites=true",
  {
    useNewUrlParser: true
  }
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(methodOverride("_method"));

app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/posts", posts);
app.use("/users", users);
app.use("/", rest);

app.use((req, res, next) => {
  res.render("404");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
