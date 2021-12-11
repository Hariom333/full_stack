import React , {useEffect,useState} from 'react'
import  {useParams} from 'react-router-dom'
import axios from "axios";

function News() {
    
    const [postObject,setObject] = useState({});
    let {id} = useParams(); 
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("")

    //### get data by id
    useEffect (()=> {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((response)=>{
    //console.log(reponse.data); 
       setObject(response.data);

    });

    axios.get(`http://localhost:3001/comments/${id}`).then((response)=>{
        //console.log(reponse.data); 
           setComments(response.data)
    
        });

},[]);


//###add comments
 const addComment = () => {

    axios.post(`http://localhost:3001/comments`,{commentBody:newComment , PostId:id }, 
     {
         headers : {
             accessToken:localStorage.getItem("accessToken"),
         },
     }
    ).then((response)=>{
        console.log(response.data);
        if(response.data.error){

            alert("Not authorization person ");
        }
        else{
            const commentToAdd = {commentBody: newComment ,username: response.data.username}
            setComments([...comments, commentToAdd]);
            setNewComment("");

        }
  
   
  //  console.log("added it");
   
});


 }

const deleteComment = (id) => {
    axios.delete(`http://localhost:3001/comments/${id}`, {headers : {accessToken:localStorage.getItem("accessToken")}}
    ).then(()=>{
         alert("token Deleted");

    });

}

    return (
        <div>
            <h1>{id}</h1>
         <h2>  {postObject.title} </h2>
         <h3> {postObject.postText}</h3>
         <h3> {postObject.userName}</h3>
       
       <div className="rightSide">
           <input type="text" placeholder = "Comment ..." autoComplete="off" value= {newComment} onChange = { (e)=>{ setNewComment(e.target.value)}} />
           <button onClick = {()=>{ addComment() }}>Add Comment</button>
       </div>

       <div className = "commentList">
          
       </div>
       {comments.map((val,index)=>{
                
                return(<div key = {index}>{val.commentBody}
                  <lable>UserName: {val.username}</lable>
                 {/* {authState.username === comments.username && <button onClick = { deleteComment}> x </button> } */}
                 </div>)

       })}
        </div>
    )
}

export default News
