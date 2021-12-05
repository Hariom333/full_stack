import React , {useEffect,useState} from 'react'
import  {useParams} from 'react-router-dom'
import axios from "axios";

function News() {
    
    const [postObject,setObject] = useState({});
    let {id} = useParams(); 
useEffect (()=> {
 
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((response)=>{

    //console.log(response.data); 
       setObject(response.data);

    });

});

    return (
        <div>
            <h1>{id}</h1>
         <h2>  {postObject.title} </h2>
         <h3> {postObject.postText}</h3>
         <h3> {postObject.userName}</h3>
        </div>
    )
}

export default News
