import React from 'react';
import './ProfileCard.css';
import image from '../assets/image-victor.jpg';

const ProfileCard = () => {

return (
    <div className="profile-card">
      <div className="banner">
        
      </div>
      <div className="profile-image">
        <img src={image} alt="Profile Picture"/>
      </div>
      <div className="profile-info">
        <p className="profile-name"><strong>Victor Crest</strong>
        <span className="profile-age">26</span>
        </p>
        <p className="location">London</p>
      </div>
      <hr />
      <div className="profile-stats">
        <div className="row">
          <div className="stats-col">
            <p><strong>80K</strong></p>
            <span className="category">Followers</span>
          </div>
          <div className="stats-col">
            <p><strong>803K</strong></p>
            <span className="category">Likes</span>
          </div>
          <div className="stats-col">
            <p><strong>1.4K</strong></p>
            <span className="category">Photos</span>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default ProfileCard;
