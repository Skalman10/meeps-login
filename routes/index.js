var express = require('express');
var router = express.Router();
const pool = require('../database');

/* GET home page. */
router.get('/', async function (req, res, next) {
  await pool.promise()
    .query(`SELECT * FROM iskthl_meeps ORDER BY created_at`)
    .then(([rows, fields]) => {
      console.log(rows);
      res.render('index.njk', {
        title: 'Homepage',
        meeps: rows
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        tasks: {
          error: `Error getting meeps`
        }
      })
    });
});

module.exports = router;
