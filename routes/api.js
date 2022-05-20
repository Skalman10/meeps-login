const express = require('express');
const router = express.Router();
var bcrypt = require('bcrypt');
const pool = require('../database');
var session = require('express-session');

router.post('/meeps', async (req, res, next) => {
    const meep = req.body.body;

    await pool.promise()
        .query('INSERT INTO iskthl_meeps (body) VALUES (?)', [meep])
        .then((response) => {
            console.log(response[0].affectedRows);
            if (response[0].affectedRows === 1) {
                res.redirect('/');
            } else {
                res.status(400).json({
                    meeps: {
                        error: 'Invalid meep'
                    }
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                meeps: {
                    error: 'Error posting meep'
                }
            })
        });
}
);

router.post('/register', async function (req, res, next) {
    const username = req.body.user;
    const password = req.body.password;

    bcrypt.hash(password, 10, async function (err, hash) {
        await pool.promise()
            .query('INSERT INTO iskthl_login (username, password) VALUES (?,?)', [username, hash])
            .then(([rows, fields]) => {
                req.session.user = username;
                res.redirect("/");
            }).catch(err => {
                console.log(err)
            });
    });
})

router.post('/login', async function (req, res, next) {
    const username = req.body.user;
    const password = req.body.password;
    await pool.promise()
        .query('SELECT * FROM iskthl_login WHERE username = ?', [username])
        .then(([rows, fields]) => {
            const user = rows[0];
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (result) {
                        req.session.user = username;
                        console.log(req.session);
                        return res.redirect("/");
                    } else {
                        res.status(500);
                    }

                });
            } else throw "error";
        })
        .catch(err => {
            res.status(500);
        });
});

router.post('/upload', function(req, res) {
    let sampleFile;
    let uploadPath;
    let user = req.session.user;
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
  
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    sampleFile = req.files.sampleFile;
    console.log(sampleFile);
    uploadPath = __dirname +'/images/' + user + '.' + sampleFile.name.split('.').pop();
  
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(uploadPath, function(err) {
      if (err)
        return res.status(500).send(err);
  
      res.send('File uploaded!');
    });
  });
module.exports = router;    