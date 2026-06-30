import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import ScrollToTop from './components/utils/ScrollTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Content />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
