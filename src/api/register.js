const express = require('express')
const bcrypt = require('bcrypt');

const User = require('../models/user')

const saltRounds = 10;

const register = express.Router()

register.post('/register', async function(req, res) {
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const phonenumber = req.body.phonenumber
    const password =  req.body.password;
    bcrypt.hash(password, saltRounds, async function(err, hash) {
        if(err)
        {
            console.log("eror hashing pwd \n" + err)
        }
        await User.register(firstname = firstname, lastname = lastname, phonenumber = phonenumber, email = email, password = hash)
        res.send({'message': 'user created'});
    });
})

module.exports = register;