import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import CarList from './components/CarList';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="App">
      <Header setPage={setPage} />
      <main>
        {page === 'home' && <Home />}
        {page === 'carlist' && <CarList />}
        {page === 'about' && <About />}
        {page === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
