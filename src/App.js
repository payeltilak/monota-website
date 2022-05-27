
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/HomePage/Home';
import Login from './Pages/Login/Login';
import Navbar from './Pages/HomePage/Shared/Navbar/Navbar';
import Footer from './Pages/HomePage/Shared/Footer/Footer';
import SignUp from './Pages/SignUp/SignUp';
import Blogs from './Pages/Blogs/Blogs';
import Portfolio from './Pages/Portfolio/Portfolio';
import DashBoard from './Pages/Dashboard/DashBoard';
import About from './Pages/About/About';
import Purchase from './Pages/Purchase/Purchase';
import MyOrders from './Pages/Dashboard/MyOrders';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import { Toaster } from 'react-hot-toast';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/User';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import AddAProduct from './Pages/Dashboard/AddProduct';
import RequireAdmin from './Pages/RequireAdmin/RequireAdmin';
// import RequireAuth from './Pages/RequireAuth/RequireAuth';




function App() {
  return (
    <div className="App">
   <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/purchase/:id" element={<Purchase></Purchase>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/dashboard" element={<RequireAuth><DashBoard /></RequireAuth>} >
          <Route index element={<MyProfile/>}></Route>
          <Route path='myorders' element={<MyOrders/>}></Route>
          <Route path='review' element={<AddReview/>}></Route>
          <Route path='users' element={<RequireAdmin><Users /></RequireAdmin>}></Route>
          <Route path='manageorder' element={<RequireAdmin><ManageAllOrders /></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddAProduct /></RequireAdmin>}></Route>
        </Route>
        {/* <Route path="/about" element={<About />} /> */}
        
        {/* <Route path="/dashboard" element={
          <RequireAuth>
            <DashBoard></DashBoard>
          </RequireAuth>} /> */}

       
        </Routes>
      <Footer></Footer>
      <Toaster />
    </div>
  );
}

export default App;
