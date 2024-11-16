import React from 'react';
//import './Card.css'; // Add your CSS styles for card layout here

// Reusable Card List Component
const CardList = ({ users }) => {
  return (
    <div className="card-list">
      {/* Map over the users array and display each user's name and email in a card */}
      {users.map((user, index) => (
        <div className="card" key={`user-${index}`}>
          <h3>{` ${user.name}`}</h3> {/* Name */}
          <p>{`Email: ${user.email}`}</p> {/* Email */}
        </div>
      ))}
    </div>
  );
};

export default CardList;
