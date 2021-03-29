const router = require('express').Router();

router.get('/api/post', (req, res) => {
  res.send("All Post");
});

module.exports = router;
