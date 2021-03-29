const router = require('express').Router();

router.get('/api/comment', (req, res) => {
  res.send("All Comments");
});

module.exports = router;
