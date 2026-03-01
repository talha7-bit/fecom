import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "/logo.jpg"
import cart from "/cart.png"
import {Menu} from "lucide-react"
import { useAdmin } from '../useAuth'
import MobileMenu from './Menu'

const Navbar = () => {
  const navigate=useNavigate();
  const {data:admin}=useAdmin();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='fixed top-0 left-0 w-full shadow-md z-10 bg-white flex items-center justify-between'>
     <div className='flex items-center -justify-center gap-3 mx-5'>
    <img src={logo} className='w-8 md:w-12 h-6 md:10'/>
    <h1 className='md:text-2xl font-bold'>SHOPPERS</h1>
      </div> 
      <div className='hidden md:flex'>
        <ul className='flex items-center justify-center gap-4 list-none'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/add">{admin ? "Add" : ""}</Link></li>
        </ul>
      </div>
      <div className='flex items-center justify-center gap-3 mr-5 list-none'>
        <li className='border rounded px-2 md:px-4 md:py-1 cursor-pointer'><Link to='/login'>Login</Link></li>
        <img src={cart} onClick={()=>navigate("/cart")} className='w-8 md:w-12 h-7 md:h-10 cursor-pointer'/>
        <Menu onClick={()=>setIsOpen(prev=>!prev)} className='w-8 h-7 md:hidden cursor-pointer'/>
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
      
    </div>
  )
}

export default Navbar