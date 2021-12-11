const express = require("express");
const router = express.Router();   //## call router function in express;
const { Users }  = require("../models");
const bcrypt = require("bcrypt");
const {sign} =  require("jsonwebtoken")
const {validateToken} = require('../middlewares/AuthMiddleware')



//####  create login password
router.post("/", async (req,res)=>{
    console.log(req.body);
    const {username, password} = req.body;
  bcrypt.hash(password,10).then((hash)=>{
      Users.create({
        username: username,
        password:hash,
       });
       res.json("SUCCESS");
  });

});


//###  login
router.post("/login",  async (req,res)=>{

  
    const {username, password} = req.body;
    const user = await Users.findOne({ where : { username: username } });

        if(!user) res.json({error : "User DOEST EXIST"});
        
        bcrypt.compare(password, user.password).then((match)=>{
            if(!match) res.json({error:"wrong password combination"});
       const accessToken = sign({username:username, id:user.id}, 
         "importantsecret");

            res.json({token:accessToken, username:username, id:user.id});

        });
    });


     // check token is correct or not
    router.get('/auth',validateToken,(req,res)=>{

       res.json(req.user);

    })

module.exports = router;