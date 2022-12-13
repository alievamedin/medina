import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCustom from './components/NavBar/NavBar';
import "./Index.css"

import { Footer } from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './MainRoutes';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavbarCustom/>
      <MainRoutes />
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
};

export default App;