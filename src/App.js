import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Signup from './Components/Signup';
import Login from './Components/Login';
import Quizcomp from './Components/Quizcomp';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/signin' element={<Login/>} />
        <Route path='/quiz' element={<Quizcomp/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      {/* <Fetch/> */}
      {/* <Effect/> */}
    </div>
  );
}

export default App;
