// App.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';

function App() {
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      alert(`File ${file.name} submitted successfully!`);
      setSubmitted(true);
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
          {file && <p style={styles.fileName}>Selected: {file.name}</p>}
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
        {submitted && <p style={styles.thankYouMessage}>Thanks for using our website!</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
  },
  form: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    width: '320px',
    textAlign: 'center',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    width: '100%',
    borderRadius: '4px',
    border: '1px solid #ddd',
    transition: '0.3s',
  },
  inputFocus: {
    borderColor: '#333',
  },
  fileName: {
    fontSize: '0.9rem',
    color: '#888',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#218838',
  },
  thankYouMessage: {
    marginTop: '15px',
    color: '#28a745',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
};

export default App;

