import React from 'react';
import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from './styled';
import Home from './pages/Home';
import Header from './components/Header';
import Resources from './pages/Resources';
import { About } from './pages/About';
import { Footer } from './components/Footer';
import { Resource } from './pages/Resource';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:id" element={<Resource />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
