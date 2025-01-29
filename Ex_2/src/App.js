// src/App.js

import React from 'react';
import UserProfile from './UserProfile';

function App() {
  return (
    <div style={styles.appContainer}>
      
      <UserProfile
        name="Rammith C"
        bio="Full-stack developer with a passion for creating scalable web applications and unique user experiences."
        email="rammithc.22it@kongu.edu"
        phone="9003344049"
        profilePicture={`${process.env.PUBLIC_URL}/rammith.jpg`}
      />
    </div>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'black',
  },
};

export default App;
