const express = require("express");
const router = express.Router();   //## call router function in express;
const { Posts }  = require("../models");


//### show all the data
router.get("/", async (req,res)=>{

    // sequlaize function to show
    const ShowAll = await Posts.findAll();
    res.json(ShowAll);
    
    
});

//### create the data
router.post("/", async (req,res)=>{

    const post = req.body;
    console.log(req.body);
 // sequalize function to create
 
 await Posts.create(post);
 res.json(post);

});

router.get('/byId/:id',async (req,res)=>{
 const id = req.params.id;
 const post = await Posts.findByPk(id);
  res.json(post);

});

module.exports = router