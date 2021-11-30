const express = require("express"); 
const app = express();
const db = require("./models");

db.sequelize.sync().then( ()=>{

  app.listen(3001,(req,res)=>{
   console.log("3001 start here");
  });
    
});




//### start port of node server

// app.listen(3001,(req,res)=>{
// console.log("3001 start here");
// });