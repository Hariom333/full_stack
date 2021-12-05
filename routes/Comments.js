const express = require("express");
const router = express.Router();   //## call router function in express;
const { Comments }  = require("../models");




router.get('/:postId',async (req,res)=>{
    const postId = req.params.postId;
    const comments = await Comments.findAll({
        where:{
            postId:postId
        }
    });
     res.json(comments);
   
   });


   //### create comment
   router.post("/", async (req,res)=>{    
    const comment = req.body
    await Comments.create(comment);

    res.json(comment);
   })

module.exports = router;
