import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState(null); // To store user data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch user data based on the count value
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${count + 1}`);
        setUserData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch user data.');
        setLoading(false);
      }
    };

    // Fetch user data only if the count is within the range (API has only 10 users)
    if (count >= 0 && count < 10) {
      fetchUserData();
    } else {
      setUserData(null); // Clear user data if count exceeds user limit
    }
  }, [count]);

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='container'>
        <div className='card text-center'>
          <div className='card-body'>
            <h1>Counter App</h1>
            <div className='my-5'>
              <h2 className='my-5'>{count}</h2>
              <button 
                className='btn btn-success mx-3' 
                onClick={() => setCount(count + 1)}
                aria-label="Increment count"
                disabled={count >= 9} // Prevent count beyond 9
              >
                Increment
              </button>
              <button 
                className='btn btn-danger mx-3' 
                onClick={() => setCount(count - 1)} 
                disabled={count <= 0} // Disable if count is zero
                aria-label="Decrement count"
              >
                Decrement
              </button>
              <button 
                className='btn btn-secondary mx-3' 
                onClick={() => setCount(0)}
                aria-label="Reset count"
              >
                Reset
              </button>
            </div>

            {/* Display user information based on API response */}
            <div className='mt-5'>
              {loading && <p>Loading user data...</p>}
              {error && <p>{error}</p>}
              {userData && (
                <div>
                  <h3>User Information (User {userData.id})</h3>
                  <p><strong>Name:</strong> {userData.name}</p>
                  <p><strong>Email:</strong> {userData.email}</p>
                  <p><strong>Phone:</strong> {userData.phone}</p>
                  <p><strong>Website:</strong> {userData.website}</p>
                </div>
              )}
              {!loading && !userData && count >= 10 && <p>No user found for this count value.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
