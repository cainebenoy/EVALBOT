import React from 'react';

const Background = ({ children }) => {
  return (
    <div style={styles.background}>
      {children}
    </div>
  );
};

const styles = {
  background: {
    background: 'linear-gradient(135deg, #4a90e2, #f06)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Background;
