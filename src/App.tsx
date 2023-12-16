import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { GlobalStyles, SectionStyled } from './styled';
import Home from './pages/Home';
import Header from './components/Header';
import Resources from './pages/Resources';
import { Footer } from './components/Footer';
import { Resource } from './pages/Resource';
import { FAQ } from './pages/FAQ';
import { OptionsContext } from './common/contexts';

function App() {
  const [isMenuShowed, setIsMenuShowed] = useState<boolean>(false);
  const [isLanguageMenuShowed, setIsLanguageMenuShowed] = useState<boolean>(false);

  return (
    <OptionsContext.Provider value={{
      isMenuShowed,
      isLanguageMenuShowed,
      // @ts-ignore
      setIsMenuShowed,
      // @ts-ignore
      setIsLanguageMenuShowed
    }}>
      <SectionStyled>
        <GlobalStyles />
        <Header />
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:id" element={<Resource />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </section>
        <Footer />
      </SectionStyled>
    </OptionsContext.Provider>
  );
}

export default App;
