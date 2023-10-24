require('dotenv').config();
const authenticateToken = require('./authMiddleware');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.use(express.json());



router.post('/', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        let skillOk = true;

        checkAllSkills = req.body.skillId.forEach(async (skillId) => {
            const checkEachSkill = await prisma.skill.findUnique({
                where: {
                    id: skillId
                }
            })
            if(!checkEachSkill) {	
                skillOk = false;
                res.status(400).json({ error: 'One or more skills do not exist' });
            }
        })
        if (skillOk == false) return res.status(400).json({ error: 'One or more skills do not exist'});

        await prisma.user.create({
            data: {
                email: req.body.email,
                password: hashedPassword,
                userName: req.body.userName,
                skills: { connect: [{id: req.body.skillId[0]}]  }
            }
        })
        res.status(201).send();
    }
    catch (error) {
        if (error.code === 'P2002') {
            return res.status(400).json({ error: 'User with the same email or username already exists.' });
        }
        console.error('Error creating user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
})

router.get('/', authenticateToken, async (req, res) => {
    const userInfo = await prisma.user.findUnique({
        where: {
            email: req.user.email
        }
    })
    res.json(userInfo)
});



module.exports = router;

