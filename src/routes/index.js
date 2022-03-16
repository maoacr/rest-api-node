const { Router } = require('express');
const router = Router();


router.get('/test', (req, res) => {
  const data = {
    "name": "Maoacr",
    "website": "maoacr.com"
  }
  res.json(data);
})

module.exports = router;