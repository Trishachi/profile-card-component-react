import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="banner">
        
      </div>
      <div className="profile-image">
        <img src="./assets/image-victor.jpg" alt="Profile Picture" />
      </div>
      <div className="profile-info">
        <p className="profile-name"><strong>Victor Crest</strong>
        <span className="profile-age">26</span>
        </p>
        <p className="location">London</p>
      </div>
      <hr />
      <div className="profile-stats">
        <a href="#" className="social-link">LinkedIn</a>
        <a href="#" className="social-link">GitHub</a>
        <a href="#" className="social-link">Twitter</a>
      </div>      
    </div>
  );
};

export default ProfileCard;
