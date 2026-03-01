import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Hero from './pages/Hero'
import Navbar from './pages/Navbar'
import Home from './components/Home'
import Add from './components/Add'
import Products from './pages/Products'
import Productdetails from './pages/Productdetails'
import Cart from './components/Cart'
import About from './components/About'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify"
import { useAdmin, useAuth } from './useAuth'


function App() {
  const [count, setCount] = useState(0)
  const {data:user}=useAuth();
  const {data:admin}=useAdmin();

  return (
   <div>
   <BrowserRouter>
   <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  pauseOnHover
  theme="dark"
/>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/add' element={<Add/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path='/productdetails/:id' element={<Productdetails/>}/>
    <Route path='/cart' element={user==200 ? <Cart/> : <Login/>}/>
    <Route path='/about' element={<About/>}/>
   </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App
