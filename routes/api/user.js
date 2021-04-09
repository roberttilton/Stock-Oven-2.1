const path = require('path');
const fs = require('fs')
const router = require('express').Router();
const {
    User , Dates
} = require('../../models');

// URL: /api/user
console.log('about to invoke user routes');

router.route('/signup')
    .post(async (req, res) => {
        console.log('POST /user/signup');
        console.log(req.session);
        try {
            const dbUserData = await User.create({
                username: req.body.username,
                password: req.body.password,
            });


            // Set up sessions with a 'loggedIn' variable set to `true`
            req.session.save(() => {
                req.session.loggedIn = true;
                req.session.username = dbUserData.username


                res.status(200).json(dbUserData);
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    });

router.route('/login')
    .post(async (req, res) => {
        console.log('POST /api/user/login');
        console.log(req.session);
        try {
            const dbUserData = await User.findOne({
                where: {
                    username: req.body.username,
                },
            });

            if (!dbUserData) {
                res
                    .status(400)
                    .json({
                        message: 'Incorrect username or password. Please try again!'
                    });
                return;
            }

            const validPassword = await dbUserData.checkPassword(req.body.password);

            if (!validPassword) {
                res
                    .status(400)
                    .json({
                        message: 'Incorrect username or password. Please try again!'
                    });
                return;
            }

            // Once the user successfully logs in, set up the sessions variable 'loggedIn'
            req.session.save(() => {
                req.session.loggedIn = true;
                req.session.username = dbUserData.username;


                res
                    .status(200)
                    .json({
                        user: dbUserData,
                        message: 'You are now logged in!'
                    });
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    });

router.route('/logout')
    .post((req, res) => {
        console.log(req.session);
        // When the user logs out, destroy the session
        if (req.session.loggedIn) {
            req.session.destroy(() => {
                console.log("destroying sesh")
                res.status(204).end();
            });
        } else {
            console.log("failed");
            res.status(404).end();
        }
    });

router.route('/')
    .post((req, res) => {
        
    })
   
module.exports = router;