import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import Signup from './Components/Signup';
import Login from './Components/Login';
import Quizcomp from './Components/Quizcomp';
import Dashboard from './Components/Dashboard';
import Quiztest from './Components/Quiztest';
import About from './Components/About';
import Error404 from './Components/Error404';

function App() {
  const [Answers, setAnswers] = useState()
  // console.log(Answers);
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/signin' element={<Login/>} />
        <Route path='/quiz' element={<Quizcomp/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/quiztest' element={<Quiztest/>}/>
        <Route path='/aboutus'  element={<About/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
      {/* <Fetch/> */}
      {/* <Effect/> */}
    </div>
  );
}

export default App;
