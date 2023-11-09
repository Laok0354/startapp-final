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

router.get('/searchProject/:searchString', async (req, res) => {

    try {
            result = await prisma.project.findMany({
            where: {
                OR: [
                    {
                        name: {
                            contains: req.params.searchString
                        }
                    },
                    {
                        description: {
                            contains: req.params.searchString
                        }
                    }
                ]
            }
        })
        
        if (result.length == 0) {
            res.status(404).json({message: "No projects found"})
        }
        else if(req.user.email != null){   
            
            const user = await prisma.user.findUnique({
                where: {
                    email: req.user.email
                }
            })
            await prisma.searchHistory.create({
                data: {
                    searchQuery: req.params.searchString,
                    userId: user.id
                }
            })
    
            res.status(200).json(result)

        }        

    } catch (error) {
        
        res.status(500).json({message: error.message})

        console.log(error)  

    }

    
});

module.exports = router;
