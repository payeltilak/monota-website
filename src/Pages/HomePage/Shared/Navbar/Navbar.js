// import { signOut } from 'firebase/auth';
// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Link } from 'react-router-dom';
// import auth from '../../../../firebase.init';
// import logo1 from '../../../../Images/logo1.png';

// const Navbar = () => {
//     const [user, loading, error] = useAuthState(auth);
//     const logout = () => {
//         signOut(auth);
//         {
//             user && <li><Link to='/dashboard'>DashBoard</Link></li>
//         }
//         <li>{user ? <button className="btn btn-ghost" onClick={logout}>Sign Out</button> : <Link to='/login'>Login</Link>}</li>
//     };
//     return (
//         <div>
//             <div class="navbar bg-base-100">
//                 <div class="navbar-start">
//                     <div class="dropdown">
//                         <label tabindex="0" class="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                         </label>
//                         <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">


//                             <li><Link to='/home'>Home</Link></li>
//                             {/* <li><Link to='/dashboard'>DashBoard</Link></li> */}
//                             {/* <li><Link to='/review'>Review</Link></li> */}
//                             <li><Link to='/portfolio'>My Portfolio</Link></li>
//                             <li><Link to='/login'>Login</Link></li>
//                             <li><Link to='/signUp'>Sign Up</Link></li>
//                             {/* <li><Link to='/about'>About</Link></li> */}
//                             <li><Link to='/blogs'>Blogs</Link></li>
//                         </ul>
//                     </div>
//                     <a class="btn btn-ghost normal-case text-xl">
//                         <img src={logo1} alt="" />
//                     </a>
//                 </div>
//                 <div class="navbar-center hidden lg:flex font-bold">
//                     <ul class="menu menu-horizontal p-0">


//                         <li><Link to="/home">Home</Link></li>
//                         {/* <li><Link to="/dashboard">DashBoard</Link></li> */}
//                         {/* <li><Link to="/review">Review</Link></li> */}
//                         <li><Link to="/portfolio">My Portfolio</Link></li>
//                         {/* <li><Link to="/about">About</Link></li> */}
//                         <li><Link to="/login">Login</Link></li>
//                         <li><Link to="/signUp">Sign Up</Link></li>
//                         <li><Link to='/blogs'>Blogs</Link></li>


//                     </ul>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Navbar;
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';


const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    const menuItems = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/purchase'>Purchase</Link></li>
        <li><Link to='/review'>Review</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        {
            user && <li><Link to='/dashboard'>DashBoard</Link></li>
        }
        <li>{user ? <button className="btn btn-ghost" onClick={logout}>Sign Out</button> : <Link to='/login'>Login</Link>}</li>
        <li><Link to='/signUp'>Sign Up</Link></li>
        

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl "><img src="https://opencart.opencartworks.com/themes/so_monota/layout11/image/catalog/logo11.png
                    " alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 font-bold">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </div>
    );
};

export default Navbar;