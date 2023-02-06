import React, { useState } from 'react';
import {FaBars,FaTimes} from 'react-icons/fa'

import { Link } from 'react-router-dom';

const Top = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='w-full bg-cyan-700 h-[80px] flex justify-between items-center px-4 text-gray-300'>
      <div>
        <h1 className='text-2xl font-bold'>News Hub App</h1>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
      <li className='hover:text-orange-200 hover:font-bold'><Link to="/">Home</Link></li>
        <li className='hover:text-orange-200 hover:font-bold'><Link to="/general">General</Link></li>
        <li className='hover:text-orange-200 hover:font-bold'><Link to="/business">Business</Link></li>
        <li className='hover:text-orange-200 hover:font-bold'><Link to="/entertainment">Entertainment</Link></li>
        <li className='hover:text-orange-200 hover:font-bold'><Link to="/health">Health</Link></li>
        <li className='hover:text-orange-200 hover:font-bold'><Link to="/science">Science</Link></li>
        <li className='hover:text-orange-200 hover:font-bold'><Link to="/sports">Sports</Link></li>
        <li className='hover:text-orange-200 hover:font-bold'><Link to="/technology">Technology</Link></li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to='/'>
            Home
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to='/general'>
            General
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to='/business'>
            Business
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to='/Entertainment'>
            Entertainment
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to='/health'>
            Health
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to='/science'>
            Science
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to='/sports'>
            Sports
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to='/technology'>
            Technology
          </Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Top;