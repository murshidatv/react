import React, { useState } from 'react';

const NameForm = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    console.log(name); // Print the name to the console
    setSubmittedName(name); // Set submitted name

    setError(''); // Clear any previous error
    setName(''); // Clear the input after submission
  };

  return (
    
      <div style={{ textAlign: 'center', marginTop: '20px' }}>

      <form onSubmit={handleSubmit}>
        <label>Enter your name:</label>
      
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update name state
          placeholder="Your Name"
        /><br></br>
       <br></br> <button >Submit</button>
      </form>
      {submittedName ? (
        <h3>Your submitted name is: {submittedName}</h3>
      ) : (
        error && <p style={{ color: 'red' }}>{error}</p>
      )}
    </div>
  );
};

export default NameForm;
