// src/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>Cescsy Devs</h1>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '1rem',
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    margin: 0,
  },
};

export default Navbar;
