require('dotenv').config();
const express = require('express'); 
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next){

    //const authHeader = req.headers['authorization']
    //const token = authHeader && authHeader.split(' ')[1]
    
    if (req.cookies.accessToke == null || req.cookies.accessToke == undefined) return res.sendStatus(401)
    
    const token = req.cookies.accessToken;
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        
        if (err) return res.sendStatus(403)
        req.user = user
        console.log(user)
        next()
        
    } )
}

module.exports = authenticateToken;