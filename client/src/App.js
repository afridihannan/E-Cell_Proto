import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import We_do from './Components/Wedo/We_do';
import Social from './Components/Social/Social';
import Signin from './Components/Signin/Signin';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import E_Summit from './Components/E_Summit/E_Summit';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Mine from './Components/Mine/Mine';

import {useState} from 'react'

function Main(){
   return (
     <>
       <Home/>
       <About/>
       <We_do />
       <Social />
       <E_Summit/>
       <Contact/>
       <Footer/>
     </>
   )
}
function App() {
  const [loginuser, setloginuser] = useState({})
  console.log(loginuser);
  return (
    <>
      <Navbar setloginuser={loginuser,setloginuser}/>
        <Routes>
          <Route exact path='/' element={ loginuser && loginuser._id?<Main/>:<Login setloginuser={setloginuser}/>}/>
          {/* <Route exact path='/' element={<Main/>}/> */}
          <Route exact path='/signin' element={<Signin/>}/>
          <Route exact path='/login' element={<Login setloginuser={setloginuser}/>}/>
          <Route exact path='/about' element={<Mine/>}/>
        </Routes>
      
    </>

  );
}

export default App;


