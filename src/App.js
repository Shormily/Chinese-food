import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Service from './Component/Header/Service/Service';
import Contact from './Component/Header/Contact/Contact';
import Home from './Component/Header/Home/Home'
import Aboutus from './Component/Header/About/Aboutus';

function App() {
  return (
    <>
    <Header/>
     <Routes>
    <Route path="/" element={<Home/>}/>
     <Route path="/service" element={<Service/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/aboutus" element={<Aboutus/>}/> 
    </Routes>  

    </>
  );
}

export default App;
