const router = require('express').Router();
const path = require('path');
const userRoutes = require('./api/user');

console.log("route testing");
router.route("/")
  .get((req, res) => {
    console.log("GET /");
    //handle root
    res.sendFile(path.join(__dirname, '../public/homepage.html'))
  });

router.route("/index")
  .get((req, res) => {
    console.log("GET /index");
    //handle root
    res.sendFile(path.join(__dirname, '../public/index.html'))
  });


console.log('about to invoke /api');
router.use('/api/user', userRoutes);

module.exports = router;