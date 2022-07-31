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
import AddUser from './Component/Header/AddUser/AddUser';
import User from './Component/Header/User/User';
import AddService from './Component/Header/AddService/AddService';
// import AddService from './Component/Header/AddService/AddService';

function App() {
  return (
    <>
    <AuthProvider>
    <Header/>
     <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/adduser" element={<AddUser/>}/>
    <Route path="/user" element={<User/>}/>
    {/* <AddService/> */}
    <Route path="/addService" element={<AddService/>}/>
     <Route path="/service" element={<PrivateRoute><Service/></PrivateRoute>}/>
    <Route path="/contact" element={<PrivateRoute><Contact/></PrivateRoute>
    
    }/>
    <Route path="/aboutus" element={<PrivateRoute><Aboutus/></PrivateRoute>}/> 
    <Route path="/login" element={<LogIn/>}/> 
    <Route path="/signup" element={  <SignUp/>}/> 
    
    </Routes>  
    <Footer></Footer>
    </AuthProvider>
    
    </>
  );
}

export default App;
