require('dotenv').config();
const authenticateToken = require('./authMiddleware');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const { get } = require('http');
const { error } = require('console');
const prisma = new PrismaClient();

router.use(express.json());

router.post('/sendCollaborationRequest/:projectId', authenticateToken, async (req, res) => {
    
    try {

        
        const existingCollaborator = await prisma.collaborator.findFirst({
            where: {
                projectId: projectId,
                userId: userId
            }
        });

        if (existingCollaborator) {
            return res.status(400).json({ error: "User is already a collaborator of the project" });
        }


        await prisma.collaborationRequest.create({
            data: {
                userId: req.user.id,
                projectId: parseInt(req.params.projectId),
                message: req.body.message
            }
        })

        res.status(200).json({message: 'Collaboration request sent'})

    } catch (error) {

        console.log(error);
        res.status(500).json({error: error})
        
    }
}) 

router.get('/getOwnCollaborationRequests', authenticateToken, async (req, res) => {
    
    try {

        //get all collaboration request sent to a project you are the creator of

        const myCollaborationRequests = await prisma.collaborationRequest.findMany({
            where: {
                userId: req.user.userId
            }
        })

        res.status(200).json(myCollaborationRequests)

    } catch (error) {

        console.log(error);
        res.status(500).json({error: error})
        
    }
});

router.get('/getOwnCollaborationRequest/:id', authenticateToken, async (req, res) => {
        
    try {

        //get collaboration request
        const myCollaborationRequest = await prisma.collaborationRequest.findMany({
            where: {
                userId: req.user.userId,

                id: parseInt( req.params.id)

            }
        })

        res.status(200).json(myCollaborationRequest)

    } catch (error) {

        console.log(error);
        res.status(500).json({error: error})
        
    }
});

router.get('/getCollaborationRequests', authenticateToken, async (req, res) => {
    
    try
    {

        //get all collaboration requests which project Id refers to a project i created
        const projects = await prisma.project.findMany({
            where: {
                creatorId: req.user.id
            },
            select: {
                id: true // Select only the projectId field
            }
        });
        
        const projectIds = projects.map(projects => projects.id);
        
        const collaborationRequests = await prisma.collaborationRequest.findMany({
            where: {
                projectId: {
                    in: projectIds
                }
            },
            include: {

                user: {
                    select: {
                        userName: true
                    }
                },
                project: {
                    select: {
                        name: true
                    }
                }
                
            }
        });

        if (collaborationRequests.length === 0) {
            return res.status(404).json({ error: "No collaboration requests found" });
        }

        res.status(200).json(collaborationRequests)

    }catch (error) {

        console.log(error);
        res.status(500).json({error: error})
    
    }
});



//create a route to get only one collaboration request based on the id 

router.get('/getCollaborationRequest/:id', authenticateToken, async (req, res) => {
        
    try {

        const projects = await prisma.project.findMany({
            where: {
                creatorId: req.user.id
            },
            select: {
                id: true // Select only the projectId field
            }
        });
        
        const projectIds = projects.map(projects => projects.id);
        
        const collaborationRequest = await prisma.collaborationRequest.findMany({
            where: {
                projectId: {
                    in: projectIds
                },

                id: parseInt(req.params.id)
            }
        });

        if (collaborationRequest.length === 0) {
            return res.status(404).json({ error: "No collaboration requests found" });
        }

        res.status(200).json(collaborationRequest)

    } catch (error) {

        console.log(error);
        res.status(500).json({error: error})
        
    }
});



router.post('/acceptCollaborationRequest/:id', authenticateToken, async (req, res) => {

    try {

     
        const projects = await prisma.project.findMany({
            where: {
                creatorId: req.user.id
            },
            select: {
                id: true 
            }
        });
        
        const projectIds = projects.map(projects => projects.id);
        
        const collaborationRequest = await prisma.collaborationRequest.findUnique({
            where: {
                projectId: {
                    in: projectIds
                },

                id: parseInt(req.params.id)
            }
        });

        const userid = collaborationRequest.userId
        const projectid = collaborationRequest.projectId

        await prisma.projectCollaborators.create({
            data: {
                userId: userid,
                projectId: projectid
            }
        })

        //update collaboration request to accepted

        await prisma.collaborationRequest.update({
            where: {
                projectId: {
                    in: projectIds
                },

                id: parseInt(req.params.id)
            },
            data: {
                status: 'accepted',

                response: req.body.response
            }
        
        })

        res.status(200).json({message: 'Collaboration request accepted'})

    } catch (error) {

        console.log(error);
        res.status(500).json({error: error})
        
    } 

})

//make a route to reject a collaboration request

router.post('/rejectCollaborationRequest/:id', authenticateToken, async (req, res) => {
    
    try {
    
        const projects = await prisma.project.findMany({
            where: {
                creatorId: req.user.id
            },
            select: {
                id: true 
            }
        });
        
        const projectIds = projects.map(projects => projects.id);

        await prisma.collaborationRequest.update({
            where: {
                projectId: {
                    in: projectIds
                },

                id: parseInt(req.params.id)
            },
            data: {
                status: 'rejected',

                response: req.body.response
            }
        
        })

        res.status(200).json({message: 'Collaboration request rejected'})

    } catch (error) {

        console.log(error);
        res.status(500).json({error: error})
        
    } 
})

router.delete('/deleteCollaborationRequest/:id', authenticateToken, async (req, res) => {
        
    try {

        const collaborationRequest = await prisma.collaborationRequest.findUnique({ 
            where: {
                id: parseInt(req.params.id)
            }
        });

        if (!collaborationRequest) {
            return res.status(404).json({ error: "No collaboration requests found" });
        }

        await prisma.collaborationRequest.delete({
            where: {
                id: parseInt(req.params.id),
            }
        })

        if (req.user.id !== collaborationRequest.userId) {
            return res.status(403).json({ error: "You are not allowed to delete this collaboration request" });
        }

  
        res.status(200).json({message: 'Collaboration request deleted'})

    } catch (error) {

        console.log(error);
        res.status(500).json({error: error})
        
    }
});


router.post('/like/:pid', authenticateToken, async (req, res) => {
    
    try {
        
        const existingLike = await prisma.ProjectLike.findUnique({
          where: {
            userId_projectId: {
              userId: req.user.id,
              projectId: parseInt(req.params.pid),
            },
          },
        });
      
        if (existingLike) {
          
            const updatedLike = await prisma.ProjectLike.update({
                where: {
                    userId_projectId: {
                    userId: req.user.id,
                    projectId: parseInt(req.params.pid),
                    },
                },
                data: {
                    liked: !existingLike.liked,
                },
            });
        
            if (updatedLike !== null) {
                res.json({ message: 'Project like updated correctly' });
            }
         
        } else {
          
          const newLike = await prisma.ProjectLike.create({
            data: {
            
              liked: true,

              project: {
                connect: {
                  id: parseInt(req.params.pid),
                },
              },
                user: {
                    connect: {
                    id: req.user.id,
                    },
                },
            },
          });

          if (newLike !== null) {
            res.json({ message: 'Project liked successfully' });
          }
      
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }

});


router.get('/getLiked', authenticateToken, async (req, res) => {
        
    try {

        const projectLikes = await prisma.ProjectLike.findMany({
            where: {
                userId: req.user.id,
                liked : true
            },
            include: {
                project: true
            }
        });

        if (projectLikes.length === 0) {
            return res.status(404).json({ error: "No projects liked" });
        }

        const projects = projectLikes.map(like => like.project);

        res.status(200).json(projects);

    } catch (error) {

        console.log(error);
        res.status(500).json({error: error});
        
    }
});

//delete all prject likkes 

router.delete('/deleteAllLikes', authenticateToken, async (req, res) => {
    const dP = await prisma.ProjectLike.deleteMany({});

    if(dP === null) {
        res.status(500).send({message: "couldnt delete project likes"});
    }

    res.status(200).send({message: "deleted all project likes"});
});
module.exports = router;
