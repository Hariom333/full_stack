module.exports = (sequelize,DataTypes)=>{

    const Posts = sequelize.define("Posts",{

         title :{
             type:DataTypes.STRING,
             allowNull: false,
         },

         PostText : {
             type:DataTypes.STRING,
             allowNull: false,
         },
       
         userName : {

            type:DataTypes.STRING,
            allowNull: false,
         },

    })



    return Posts
}