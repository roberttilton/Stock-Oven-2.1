const axios = require("axios");

const router = require("express").Router();

// Matches: /api/reddit
router
  .route("/")
  .get(fetchReddit);

  function fetchReddit(req, res) {
  axios.get('https://www.reddit.com/r/wallstreetbets/hot.json')
	.then((data) => res.json(data.data));	
};
	

module.exports = router;
