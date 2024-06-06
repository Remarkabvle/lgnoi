import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Products from './components/products/Products';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Hero />
      <Products />
      <Footer />
    </>
  );
}

export default App;
