const express = require("express"); 
const app = express();
const db = require("./models");
const cors = require("cors");

// front requested
app.use(express.json());
app.use(cors());

//## Router for post
const postRouter = require("./routes/Posts");
app.use("/posts",postRouter);


//## Router for comment
const commentsRouter = require("./routes/Comments");
app.use("/comments",commentsRouter);




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