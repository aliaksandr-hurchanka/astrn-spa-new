import React from 'react';
import { Route, Routes } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
import { GlobalStyles, ParallaxStyled } from './styled';
import Home from './pages/Home';
import Header from './components/Header';
import Products from './pages/Products';
import { About } from './pages/About';
import { AppStyled } from './styled';

function App() {
  return (
    <AppStyled>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AppStyled>
  );
}

export default App;
