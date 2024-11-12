import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Interface from './components/Interface'
import { BrowserRouter as Rouer,Routes,Route } from 'react-router-dom';
import Signup from './components/Signup'
import Login from './components/Login'
import Profile from './components/Profile'
import Logout from './components/Logout'
import Instructions from './components/Instructions'
import Physics_interface from './components/Physics_interface'
import Maths_interface from './components/Maths_interface'
import Chem_interface from './components/Chem_interface'
import PaymentPage from './components/payment_components/PaymentPage'

function App() {

  return (
      <div>
        

        <Routes>
          <Route path="/" element={<><Navbar/><Home/><Footer/></>} />
          <Route path="/interface" element={<Interface/>} />                
          <Route path="/instructions" element={<Instructions/>} />                
          <Route path="/register" element={<><Navbar/><Signup/></>} />                
          <Route path="/login" element={<><Navbar/><Login/></>} />                
          <Route path="/logout" element={<Logout/>} />                
          <Route path="/profile" element={<><Navbar/><Profile/><Footer/></>} />                
          <Route path="/physics_pyqs" element={<><Navbar/><Physics_interface/><Footer/></>} />                
          <Route path="/math_pyqs" element={<><Navbar/><Maths_interface/><Footer/></>} />                
          <Route path="/chemistry_pyqs" element={<><Navbar/><Chem_interface/><Footer/></>} />                
          <Route path="/payment/:ID" element={<PaymentPage/>} />                
        </Routes>

        
      </div>
  )
}

export default App
