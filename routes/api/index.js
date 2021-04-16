const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const redditRoutes = require("./reddit");
const signupRoutes = require("./signup");
const passport = require("../../passport");

// User routes 
// endpoint: /api
router.use("/users", userRoutes);

// Reddit routes
// endpoint: /api
router.use("/reddit", redditRoutes);

router.use("/signup", signupRoutes);

// Matches: /api/login
router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log("POST /api/login - req.user: ", req.user);
  const userInfo = {
    id: req.user._id,
    name: req.user.name,
    email: req.user.email
  };
  res.json(userInfo);
});

// Matches: /api/login
router.get("/login", (req, res) => {
  console.log("GET /api/login, req.user: ", req.user);
  if (!req.user) {
    console.log("req.user does not exist");
    res.send("Not logged in yet!");
    // res.redirect("/login");
  }
  else {
    return res.json(req.user.name);
  }
});

// Matches /api/logout
router.post("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.send({ message: "Logged out!" });
  } else {
    res.send({ message: "Not signed in!" });
  }
});

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
