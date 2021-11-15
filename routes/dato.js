const express = require('express');
const router = express.Router();
const { datoDansk } = require('../public/javascripts/danskTid.js');
router.get('/', (req, res) => {
  res.json({
    date: datoDansk(),
  });
});

module.exports = router;