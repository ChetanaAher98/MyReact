import './App.css';
import React from 'react'
import Registationform1 from './Components/Registationform1'
import Registor from './Components/Registor';
import UseContextDemo from './Components/UseContextDemo';
import Child from './Components/Child';
import Component1 from './Components/Component1';
// import Component2 from './Components/Component2';
// import Component3 from './Components/Component3';
import Usestate1 from './Components/Usestate1';
import AnotherUseContextDemo from './Components/AnotherUseContextDemo';
import Contextone from './Components/Contextone';
import Navbar from './Components/Navbar';
import Car from './Components/Car'
import PropsDemo from './Components/PropsDemo';
import Events from './Components/Events';
import UseEffectDemo from './Components/UseEffectDemo';
import Child from './Components/Child';
import RegistrationForm from './Components/RegistrationForm';



// import {Abc} from 'path'           For named export
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegistrationForm from './Components/RegistrationForm';


function App() {

  // const attribute = {
  //   color: "green",
  //   fontWeight: "bold"
  // }

  // const abc = false
  // let xyz

  // abc ? xyz = "Akash" : xyz = "Bhushan"

  // const name = "Bhushan"

  // const age = 23

  // const hobbies = ["Coding", "Trekking"]

  // const company = {
  //   name: "Sumago Infotech",
  //   city: "Nashik"
  // }

  return (
    <BrowserRouter>
      <Navbar />
      <AnotherUseContextDemo>
        <Routes>
          <Route path='/' element={<Usestate1 />}/>
          <Route path='/about' element={<Contextone />}/>
          <Route path='/register' element={<RegistrationForm/>}/>
        </Routes>
      </AnotherUseContextDemo>
    </BrowserRouter>
  );
}

export default App;