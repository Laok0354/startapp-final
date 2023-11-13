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
            return res.status(400).send({ message: "Project name and description are required" });
        }
      
        const newProject = await prisma.project.create({
            data: {
                name: req.body.name,
                description: req.body.description,
                statusId: req.body.statusId,
                creatorId: req.user.id
            }
        });

        if (!newProject) {
            return res.status(409).send({message: "couldnt create project"}); 
        }

        projectCollabortors = await prisma.projectCollaborators.create({
            data: {
                projectId: newProject.id, 
                userId: req.user.id 
            }
        });

        if (!projectCollabortors) {
            return res.status(409).send({message: "couldnt create project, collaborators"}); 
        }

        projectStatus = await prisma.projectStatus.create({
            data: {
                projectId: newProject.id,
                statusId: req.body.statusId
            }
        });

        if (!projectStatus) {
            return res.status(409).send({message: "couldnt create project, status"}); 
        }

        res.status(201).send(message = "project created");
    } 
    catch (error) 
    {
        console.log(error)
        res.status(error.message).send({message: "couldnt create project"})
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
            return res.status(404).send({message: 'couldnt find project'});
        }

        const isCollaborator = await prisma.projectCollaborators.findFirst({
            where: {
                projectId: project.id,
                userId: req.user.id
            }
        });
        
        if (!isCollaborator) {
            return res.status(401).send({message: "not authorized"});
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
            return res.status(409).send({message: "project with same name already exists"});
        }

        let updatedProject = await prisma.project.update({
            where: {
                id: project.id
            },
            data: {
                name: req.body.name,
                description: req.body.description,
                statusId: req.body.statusId,
            }
        });

        if (!updatedProject) {
            return res.status(409).send({message: "couldnt update project updated"}); 
        }

        let existingProjectStatus = await prisma.projectStatus.findUnique({
            where: {
                projectId: project.id
            }
        });

        if (!existingProjectStatus) {
            return res.status(409).send({message: "couldnt find project status"}); 
        }

        console.log(existingProjectStatus.id)

        let updatedProjectStatus = await prisma.projectStatus.update({
            where: {
                id: existingProjectStatus.id
            },
            data: {
                statusId: req.body.statusId
            }
        })

        if (!updatedProjectStatus) {
            return res.status(409).send({message: "couldnt update project status"}); 
        }
        

        res.status(201).send({message: "project updated"});

    } 
    catch (error) 
    {
       console.log(error)
       res.status(500).send({message: "couldnt ff project"})
    }
})

router.get('/getp/:pid', authenticateToken, async (req, res) => {
    try 
    {  
        const project = await prisma.Project.findUnique({
            where: {
                id: parseInt(req.params.pid)
            },
            include: {
                status: {
                    select: {
                        name: true
                    }
                }
            }
        });

        if (!project) {
            return res.status(404).send({message: "project not found"});; 
        }

       await prisma.visitHistory.create({
            data: {
                projectId: project.id,
                userId: req.user.id
            }
        });

        res.status(200).json({project});
    } 
    catch (error) 
    {
       console.log(error)
       res.status(500).send({message: "couldnt get project"})
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
            return res.status(404).send({message: "project not found"}); 
        }

        if (project.creatorId != req.user.id) {
            return res.status(401).send({message: "not authorized"}); 
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

        res.status(200).send({message: "project deleted"});

    } 
    catch (error) 
    {
       console.log(error)
       res.status(500).send({message: "couldnt delete project"})
    }
})

router.get('/getAllProjects', async (req, res) => {

    try {
        const projects = await prisma.project.findMany();
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


