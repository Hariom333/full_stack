const express = require("express");
const router = express.Router(); //## call router function in express;
const { Comments } = require("../models");

const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const comments = await Comments.findAll({
    where: {
      postId: postId,
    },
  });
  res.json(comments);
});

//### create comment
router.post("/", validateToken, async (req, res) => {
  const comment = req.body;
  const username = req.user.username;

  comment.username = username;
  await Comments.create(comment);

  res.json(comment);
});


router.delete("/:commentId",validateToken, async (req,res)=> {
   const commentId =  req.params.commentId;
   Comments.destroy({ where:{
     id: commentId,

   }, });
} );

module.exports = router;
