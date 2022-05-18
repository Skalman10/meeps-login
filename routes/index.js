var express = require('express');
var router = express.Router();
const pool = require('../database');

/* GET home page. */
router.get('/', async function (req, res, next) {
  await pool.promise()
    .query(`SELECT * FROM iskthl_meeps ORDER BY created_at DESC`)
    .then(([rows, fields]) => {
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

router.get('/login', function(req, res, next) {
  res.render('login.njk', { title: 'login'});
});

router.get('/register', function(req, res, next) {
  res.render('register.njk', { title: 'register'});
});

router.get('/profile', function(req, res, next) {
  res.render('profile.njk', { title: 'register', user: req.session.user });
});

module.exports = router;
