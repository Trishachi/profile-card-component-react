import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src="/src/assets/profile-placeholder.jpg" alt="Profile" />
      </div>
      <div className="profile-info">
        <h2>John Doe</h2>
        <p className="job-title">Software Developer</p>
        <div className="social-links">
          <a href="#" className="social-link">LinkedIn</a>
          <a href="#" className="social-link">GitHub</a>
          <a href="#" className="social-link">Twitter</a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
