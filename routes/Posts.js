const express = require("express");
const router = express.Router();   //## call router function in express;
const { Posts }  = require("../models");


router.get("/",(req,res)=>{
res.send("Hello");
});

router.post("/", async (req,res)=>{
const post = req.body;

// sequalize function to create
await Posts.create(post);
res.json(post);

});


module.exports = router