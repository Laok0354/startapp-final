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

    try {
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

    } catch (error) {

        console.log(error);
        res.status(500).json({error: error})
    }

    
});

router.get ('/visitHistory', async(req, res) => {

    try {
             
        const visitHistory = await prisma.visitHistory.findMany({
            where: {
                userId: req.body.id
            }
        })

        const projectPromises = visitHistory.map(async (visit) => {
            const projects = await prisma.project.findMany({
                where: {
                    id: visit.projectId
                }
            });

            return projects.map((project) => project.name);
        });

        const projectNamesArray = await Promise.all(projectPromises);

        const visitedProjects = projectNamesArray.flat().join(' ');

        res.status(200).json(visitedProjects);


    } catch (error) {
        
        console.log(error);
        res.status(500).json({error: error})

    }
    
});

module.exports = router;

    