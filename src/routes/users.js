const router = require('express').Router();

router.get('/api/user', (req, res) => {
  res.send("All Users");
});

module.exports = router;
