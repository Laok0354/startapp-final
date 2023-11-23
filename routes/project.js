require('dotenv').config();
const authenticateToken = require('./authMiddleware');
const express = require('express'); 
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const { join } = require('@prisma/client/runtime/library');
const prisma = new PrismaClient();


router.use (express.json());

router.post('/create',authenticateToken, async (req, res) => {
    try 
    {  
        if (!req.body.name || !req.body.description) {
            return res.status(400).json({ message: "Project name and description are required" });
        }

        const existingProject = await prisma.project.findFirst({
            where: {
                name: req.body.name
            }
        });
        
        if (existingProject) {
            return res.status(409).json({message: "project with same name already exists"});
        }
      
        const newProject = await prisma.project.create({
            data: {
                name: req.body.name,
                description: req.body.description,
                status: {
                    connect: {
                        id: req.body.statusId 
                    }
                },
                creatorId: req.user.id,
                maxMembers: req.body.maxMembers
            }
        });

        if (!newProject) {
            return res.status(409).json({message: "couldnt create project"}); 
        }

        projectCollabortors = await prisma.projectCollaborators.create({
            data: {
                projectId: newProject.id, 
                userId: req.user.id 
            }
        });

        if (!projectCollabortors) {
            return res.status(409).json({message: "couldnt create project, collaborators"}); 
        }

        res.status(201).json(message = "project created");
    } 
    catch (error) 
    {
        console.log(error)
        res.status(error.message).json({message: "couldnt create project"})
    }
})


router.put('/modify/:pid', authenticateToken, async (req, res) => {
    try 
    {  
        const project = await prisma.project.findUnique({
            where: {
                id: parseInt(req.params.pid)
            }
        });

        if (!project) {
            return res.status(404).json({message: 'couldnt find project'});
        }

        const isCollaborator = await prisma.projectCollaborators.findFirst({
            where: {
                projectId: project.id,
                userId: req.user.id
            }
        });
        
        if (!isCollaborator) {
            return res.status(401).json({message: "not authorized"});
        }

        const existingProject = await prisma.project.findFirst({
            where: {
                name: req.body.name,
                NOT: {
                    id: parseInt(req.params.pid)
                }
            }
        });

        if (existingProject) {
            return res.status(409).json({message: "project with same name already exists"});
        }

        let updatedProject = await prisma.project.update({
            where: {
                id: project.id
            },
            data: {
                name: req.body.name,
                description: req.body.description,
                statusId: req.body.statusId,
                maxMembers: req.body.maxMembers
            }
        });

        if (!updatedProject) {
            return res.status(409).json({message: "couldnt update project updated"}); 
        }

        res.status(201).json({message: "project updated"});

    } 
    catch (error) 
    {
       console.log(error)
       res.status(500).json({message: "couldnt ff project"})
    }
})

router.get('/getp/:pid', async (req, res) => {
    try 
    {  
        if(req.user){
            await authenticateToken(req);
            await prisma.visitHistory.create({
                data: {
                    projectId: project.id,
                    userId: req.user.id
                }
            });
        }
        const project = await prisma.Project.findUnique({
            where: {
                id: parseInt(req.params.pid)
            },
            include: {
                collaborators: {
                    select:{
                        user: true
                    }
                },
                status: {
                    select: {
                        name: true
                    }
                }
            }
        });

        if (!project) {
            return res.status(404).json({message: "project not found"});; 
        }

        res.status(200).json({project});
    } 
    catch (error) 
    {
       console.log(error)
       res.status(500).json({message: "couldnt get project"})
    }
})

router.delete('/delete/:pid', authenticateToken, async (req, res) => {
    try 
    {  
        const project = await prisma.Project.findUnique({
            where: {
                id: parseInt(req.params.pid)
            }
        });

        if (!project) {
            return res.status(404).json({message: "project not found"}); 
        }

        if (project.creatorId != req.user.id) {
            return res.status(401).json({message: "not authorized"}); 
        }

        await prisma.ProjectCollaborators.deleteMany({
            where: {
                projectId: project.id
            }
        });

        await prisma.Project.delete({
            where: {
                id: project.id
            }
        });

        res.status(200).json({message: "project deleted"});

    } 
    catch (error) 
    {
       console.log(error)
       res.status(500).json({message: "couldnt delete project"})
    }
})

router.get('/getAllProjects', async (req, res) => {

    try {
        const projects = await prisma.project.findMany({
            include: {
                collaborators: true
            }
        });
        res.status(200).json(projects);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "couldnt find any projects" });
    }

});

router.get('/getMyProjects', authenticateToken, async (req, res) => {
    
    try 
    {
        const projects = await prisma.project.findMany
        ({
            where:
            {
                creatorId: req.user.id
            },
            include: {
                collaborators: true
            }
        });
        res.status(200).json(projects);
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).json({ message: "couldnt find any projects" });
    }
    
});


module.exports = router;


