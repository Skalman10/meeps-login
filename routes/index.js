var express = require('express');
var router = express.Router();
const pool = require('../database');

/* GET home page. */
router.get('/', async function(req, res, next) {
  console.log('ASdasdasdas');
  await pool.promise()
  .query(`SELECT * FROM iskthl_meeps`)
  .then(([rows, fields]) => {
      console.log(rows);
      res.json({
          meeps: {
              data: rows
          }
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
  res.render('index.njk', { title: 'Homepage' });
});

module.exports = router;
