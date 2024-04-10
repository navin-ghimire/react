import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi';
import { HiOutlineX } from 'react-icons/hi';

const Header = () => {
const [show, setShow] = useState(false);
const handleshow = () => {
  setShow((prev) => !prev);
}

  return (
    <div className='bg-black text-white px-5 flex sm:items-start items-center justify-between py-2 sticky top-0 z-10'>
<div>
      <h1 className='mb-2'>Web Logo</h1>

      {show && <nav className=' sm:flex sm:flex-col hidden space-y-4'>
        <NavLink to='/About'>About</NavLink>
        <NavLink to='/Contact'>Contact</NavLink>
       </nav>} 
</div>

<div className='mt-1 hidden sm:flex'>
  {show ? <button onClick={handleshow}><HiOutlineX size={25}/></button>: <button onClick={handleshow}><BiMenu size={26} /></button> }
  
</div>
<nav className='space-x-4 sm:hidden'>
        <NavLink to='/About'>About</NavLink>
        <NavLink to='/Contact'>Contact</NavLink>
       </nav>
    </div>
  )
}

export default Header