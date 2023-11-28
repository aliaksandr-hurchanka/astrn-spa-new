import React from 'react';
import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from './styled';
import Home from './pages/Home';
import Header from './components/Header';
import Resources from './pages/Resources';
import { About } from './pages/About';
import { AppStyled } from './styled';
import { Footer } from './components/Footer';

function App() {
  return (
    <AppStyled>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </AppStyled>
  );
}

export default App;
