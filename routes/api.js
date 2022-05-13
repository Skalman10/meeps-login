const express = require('express');
const router = express.Router();
var bcrypt = require('bcrypt');
const pool = require('../database');

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
        .query('INSERT INTO iskthl_login (username, password) VALUES (?,?)', [username,hash])
        .then(([rows, fields]) => {
            req.session.user = username;
            res.redirect("/");
        }).catch(err => {
            console.log(err)
        });
    });
})

module.exports = router;