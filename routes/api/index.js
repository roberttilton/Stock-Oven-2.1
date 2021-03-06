const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const redditRoutes = require("./reddit");

// User routes 
// endpoint: /api
router.use("/users", userRoutes);

// Reddit routes
// endpoint: /api
router.use("/reddit", redditRoutes);



// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
