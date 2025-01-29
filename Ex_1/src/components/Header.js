import React from 'react';

const Header = ({ setPage }) => {
  return (
    <header>
      <h1>Car Website</h1>
      <nav>
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('carlist')}>Cars</button>
        <button onClick={() => setPage('about')}>About</button>
        <button onClick={() => setPage('contact')}>Contact</button>
      </nav>
    </header>
  );
};

export default Header;
