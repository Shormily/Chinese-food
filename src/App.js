import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Service from './Component/Header/Service/Service';
import Contact from './Component/Header/Contact/Contact';
import Home from './Component/Header/Home/Home'
import Aboutus from './Component/Header/About/Aboutus';
import Footer from './Component/Header/Footer/Footer';
import LogIn from './Component/Header/LogIn/LogIn';
import SignUp from './Component/Header/SignUp/SignUp';
import AuthProvider from './Component/Header/Context/AuthProvider';
import PrivateRoute from './Component/Header/PrivateRoute/PrivateRoute';
// import PrivateRoute from './Component/Header/PrivateRoute/PrivateRoute';

function App() {
  return (
    <>
    <AuthProvider>
    <Header/>
     <Routes>
    <Route path="/" element={<Home/>}/>
     <Route path="/service" element={<Service/>}/>
    <Route path="/contact" element={
    <Contact/>
    }/>
    <Route path="/aboutus" element={<Aboutus/>}/> 
    <Route path="/login" element={<LogIn/>}/> 
    <Route path="/signup" element={  <SignUp/>}/> 
    <Route
          path="/privateroute"
          element={
          <PrivateRoute/>
          }
        />
    </Routes>  
    <Footer></Footer>
    </AuthProvider>
    
    </>
  );
}

export default App;
