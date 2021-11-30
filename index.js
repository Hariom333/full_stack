const express = require("express"); 
const app = express();
const db = require("./models");

// front requested
app.use(express.json());


//## Router
const postRouter = require("./routes/Posts");

app.use("/posts",postRouter);








//##create table in database
db.sequelize.sync().then( ()=>{
  app.listen(3001,(req,res)=>{
   console.log("3001 start here");
  });
    
});




//### start port of node server

// app.listen(3001,(req,res)=>{
// console.log("3001 start here");
// });