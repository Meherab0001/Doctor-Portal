import { Route,  Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUP from './Pages/Login/SignUP';
import Reviews from './Pages/Reviews/Reviews';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReviews from './Pages/Dashboard/MyReviews';
import MyHistory from './Pages/Dashboard/MyHistory';
function App() {
  return (
    <div className='max-w-7xl mx-auto px-12' >
     <Navbar></Navbar>

       <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<RequireAuth>
          <Appointment />
        </RequireAuth>} />
        <Route path="/dashboard" element={<RequireAuth>
          <Dashboard />
        </RequireAuth>} >

          <Route index element={<MyAppointment/>}></Route>
          <Route path='review' element={<MyReviews/>}></Route>
          <Route path='history' element={<MyHistory/>}></Route>
        </Route>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SignUP />} />
       </Routes>
       <ToastContainer />
    </div>
  );
}

export default App;
