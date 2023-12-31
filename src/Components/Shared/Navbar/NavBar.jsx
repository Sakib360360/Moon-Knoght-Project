import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { FaMoon, FaRegMoon } from 'react-icons/fa';


const NavBar = () => {
    const user = false;
    const navItems = <>
        <li className=''><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
        } to='/'>Home</NavLink></li>
        <li className=''><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
        } to='/about'>About</NavLink></li>
        <li className=''><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
        } to='/advisors'>Advisors</NavLink></li>
        <li className=''><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
        } to='/reviews'>Reviews</NavLink></li>

        {
            user && <li><NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
            } to={isAdmin ? '/dashboard/adminHome' : isInstructor ? '/dashboard/instructorHome' : '/dashboard/studenthome'}>Dashboard</NavLink></li>
        }

    </>
    return (
        <div>
            <div className={`   navbar   transition duration-300 ${scroll ? 'bg-white text-black' : 'bg-transparent text-white'
                }`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu bg-slate-600 font-bold menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Link to='/' className="btn md:block hidden uppercase btn-ghost  text-xl">Name</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu font-bold menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* {
                        <button className='mr-8 flex items-center justify-center gap-2'>

                            <input type="checkbox" className="toggle toggle-md" />
                            <FaMoon></FaMoon>
                        </button>
                    } */}


                    {
                        user ? <p className='mr-2 md:mr-6'><Link>Log out</Link></p> : <><p><NavLink to='/login'>Login</NavLink></p>
                        </>
                    }
                    {
                        user?.photoURL && <label className="btn hidden md:block btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={''} />
                            </div>
                        </label>
                    }

                </div>

            </div>

        </div>
    );
};

export default NavBar;