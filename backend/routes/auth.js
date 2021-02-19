const express = require('express');


//validation of the input of the sign-up
//checks if the email exists or not
//the format or empty fields
const { body } = require('express-validator');

const router = express.Router();

const User = require('../models/user');

const authController = require('../Controllers/auth');

router.post(
    '/signup', [
        body('name').trim().notEmpty(),
        body('email').isEmail().withMessage('Please enter a valid email. ')
        .custom(async (email)=>{
            const user = await User.find(email)  //waiting for a response
            if (user[0].length > 0){ //if the email already exists
                return Promise.reject('Email address already exist');
                
            }
        })
        .normalizeEmail(), //uppercase, lowercase letters are acceptable
        body('password').trim().isLength({min: 7})
    ], authController.signup //catch the errors and cancel the operation if there's any error

    
    );

    module.exports = router;
