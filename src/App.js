
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/HomePage/Home';
import Login from './Pages/Login/Login';
import Navbar from './Pages/HomePage/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
   <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login />} />
      
      </Routes>
   
    </div>
  );
}

export default App;
