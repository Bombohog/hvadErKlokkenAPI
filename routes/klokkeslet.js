const express = require('express');
const router = express.Router();
const { klokkeslet } = require('../public/javascripts/danskTid.js');

router.get('/', (req, res) => {
  res.json({
    klokken: klokkeslet(),
  });
});

module.exports = router;