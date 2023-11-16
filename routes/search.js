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

router.get('/searchProject/:searchString', authenticateToken(), async (req, res) => {

    try {
        const searchString = req.params.searchString;
            const user = await prisma.user.findUnique({
                where: {
                    email: req.user.email
                }
            });

            await prisma.searchHistory.create({
                data: {
                    searchQuery: searchString,
                    userId: user.id
                }
            });

        const result = await prisma.project.findMany({
            where: {
                OR: [
                    {
                        name: {
                            contains: searchString
                        }
                    },
                    {
                        description: {
                            contains: searchString
                        }
                    }
                ]
            }
        });

        if (result.length === 0) {
            res.status(404).json({ message: "No projects found" });
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        console.log(error);
    }
});

router.get('/searchProject/:searchString', async (req, res) => {
    try {
        const searchString = req.params.searchString;

        const result = await prisma.project.findMany({
            where: {
                OR: [
                    {
                        name: {
                            contains: searchString
                        }
                    },
                    {
                        description: {
                            contains: searchString
                        }
                    }
                ]
            }
        });

        if (result.length === 0) {
            res.status(404).json({ message: "No projects found" });
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        console.log(error);
    }
});

router.get('/searchUser/:searchString', async (req, res) => {

    try {
        const searchString = req.params.searchString;

        if (req.user) {
            authenticateToken()
            const user = await prisma.user.findUnique({
                where: {
                    email: req.user.email
                }
            });

            await prisma.userSearchHistory.create({
                data: {
                    searchQuery: searchString,
                    userId: user.id
                }
            });
        }

        const result = await prisma.user.findMany({
            where: {
                OR: [
                    {
                        userName: {
                            contains: searchString
                        }
                    },
                    {
                        about: {
                            contains: searchString
                        }
                    }
                ]
            }
        });

        if (result.length === 0) {
            res.status(404).json({ message: "No users found" });
        }

        
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
