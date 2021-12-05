import React from 'react'
import Home from "./pages/Home"
import News from "./pages/News"
import CreatePost from "./pages/CreatePost"
import { Route ,Link} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div>

     <Link to="/">Home </Link> <br />
     <Link to="/about"> CreatePost </Link>

        <Route exact path='/' component={Home} />
        <Route path='/about' component={CreatePost} />
        <Route path = "/post/:id" exact component = {News} />

        
    </div>
  )
}


export default App
