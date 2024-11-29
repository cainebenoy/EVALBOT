import React from 'react';

const ThankYouMessage = () => {
  return <p style={styles.message}>Thanks for using our website!</p>;
};

const styles = {
  message: {
    marginTop: '15px',
    color: '#28a745',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

export default ThankYouMessage;
