import React from 'react';
import CardList from './CardList'; // Import the reusable CardList component
import './Card.css';
function App() {
  const usersArray = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
    { name: 'Alice Johnson', email: 'alice@example.com' }
  ];

  return (
    <div>
      <h1>User Cards</h1>
      <CardList users={usersArray} /> {/* Pass the array of users to CardList */}
    </div>
  );
}

export default App;
