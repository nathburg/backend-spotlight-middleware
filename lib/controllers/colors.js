const { Router } = require('express');
const colors = require('../middleware/colors');
const red = require('../middleware/red');
const blue = require('../middleware/blue');
const yellow = require('../middleware/yellow');

// what middleware does this route need to pass?
module.exports = Router()
  .get('/purple', [colors, red, blue], (req, res) => {
    res.json(req.colors);
  })

  .get('/orange', [colors, red, yellow], (req, res) => {
    res.json(req.colors);
  });
