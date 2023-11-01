require('dotenv').config();
const authenticateToken = require('./authMiddleware');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const { get } = require('http');
const prisma = new PrismaClient();

router.use(express.json());

router.get ('/searchHistory', async (req, res) => {

  
    const searchHistory = await prisma.searchHistory.findMany({
        where: {
            userId: req.body.id
        }
    })

    let searchQuerys = '';

    searchHistory.forEach((search) => {
        searchQuerys += search.searchQuery + ' ';
    })

    res.status(200).json(searchQuerys)
});

module.exports = router;

    