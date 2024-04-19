import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home';
import News from './News';
import Assignments from './Assignments';
import Lessons from './Lessons';
import Contact from './Contact';

export default function App() {
  return (
    <Router>
    <Routes>

      <Route index element = {<Home/>}/>
      <Route path = "/" element = {<Home/>}/>

      <Route path = "/lessons" element = {<Lessons/>}/>
      <Route path = "/assignments" element = {<Assignments/>}/>
      <Route path = "/news" element = {<News/>}/>
      <Route path = "/contact" element ={<Contact/>}/>
      
    </Routes>
    </Router>
  )
}

