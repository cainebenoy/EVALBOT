import React, { useState } from 'react';
import Navbar from './Navbar';

function App() {
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false); // New state for thank-you message

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setSubmitted(false); // Reset thank-you message on new file selection
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      alert(`File ${file.name} submitted successfully!`);
      setSubmitted(true); // Show thank-you message
    } else {
      alert('Please upload a file before submitting.');
    }
  };

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Upload PDF:
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              style={styles.input}
            />
          </label>
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
        {submitted && (
          <p style={styles.thankYouMessage}>Thanks for using our website!</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  form: {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '300px',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  input: {
    marginBottom: '10px',
    padding: '8px',
    width: '100%',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  thankYouMessage: {
    marginTop: '15px',
    color: '#28a745',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

export default App;

