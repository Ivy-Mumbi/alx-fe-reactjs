import React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ 
      padding: '20px', 
      backgroundColor: '#eef2f3', 
      minHeight: '60vh' 
    }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>City Profiles</h2>

      <UserProfile 
        name="Nairobi" 
        age="129" 
        bio="Kenya’s vibrant capital known for its national park and culture." 
      />
      <UserProfile 
        name="Tokyo" 
        age="400" 
        bio="A bustling metropolis blending tradition with futuristic innovation." 
      />
      <UserProfile 
        name="Paris" 
        age="2,000" 
        bio="The city of lights, art, and world-famous cuisine." 
      />
    </main>
  );
}

export default MainContent;
