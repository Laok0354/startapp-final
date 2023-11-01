require('dotenv').config();
const authenticateToken = require('./authMiddleware');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
router.use(express.json());


//search projects full text

router.get('/searchProject', authenticateToken, async (req, res) => {
    result = await prisma.project.findMany({
        where: {
            OR: [
                {
                    name: {
                        contains: req.body.searchString
                    }
                },
                {
                    description: {
                        contains: req.body.searchString
                    }
                }
            ]
        }
    })
    
    //add search to searchhistory
    const user = await prisma.user.findUnique({
        where: {
            email: req.user.email
        }
    })
    await prisma.searchHistory.create({
        data: {
            searchQuery: req.body.searchString,
            userId: user.id
        }
    })

    res.status(200).json(result)
});

module.exports = router;
