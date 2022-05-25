
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/HomePage/Home';
import Login from './Pages/Login/Login';
import Navbar from './Pages/HomePage/Shared/Navbar/Navbar';
import Footer from './Pages/HomePage/Shared/Footer/Footer';
import SignUp from './Pages/SignUp/SignUp';
import Blogs from './Pages/Blogs/Blogs';
import Portfolio from './Pages/Portfolio/Portfolio';



function App() {
  return (
    <div className="App">
   <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
       
        
      
      </Routes>
      <Footer></Footer>
   
    </div>
  );
}

export default App;
