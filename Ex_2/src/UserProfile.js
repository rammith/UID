// src/UserProfile.js

import React from 'react';

const UserProfile = ({ name, bio, email, phone, profilePicture }) => {
  return (
    <div style={styles.container}>
      <img
        src={profilePicture}
        alt={`${name}'s profile`}
        style={styles.profileImage}
      />
      <h2>{name}</h2>
      <p>{bio}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
    </div>
  );
};

const styles = {
  container: {
    width: '300px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f4f4f4',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
    backgroundColor:'orange'
  },
  profileImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '15px',
  },
};

export default UserProfile;
