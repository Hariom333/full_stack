import React , { useEffect,useState } from 'react'
import axios from "axios"
import { useHistory } from 'react-router-dom';

function Home() {

    const [list,setList] = useState([]);
    let history = useHistory()
  
    useEffect(()=>{
        axios.get('http://localhost:3001/posts').then((response)=>{
                  setList(response.data);            
        });
    },[]);

    return (
        <div>
            <p>Home</p>
            <table>
                <th>
                    <td>SrNo. </td>
                    <td>Title </td>
                    <td>PostText </td>
                    <td> UserName</td>
                </th>
               
            { 
            
                list.map( (val,index)=>{
                
                   return(<div><th>
                    <td key = {val.id} onClick = { ()=>{ history.push(`/post/${val.id}`) } }>{val.id}</td>
                    <td>{val.title}</td>
                   <td>{val.postText}</td>
                   <td>{val.userName}</td>
                   </th>
                   </div>
                  )           
            }) 
            
            }
           
          </table>
        </div>
    )
}

export default Home
