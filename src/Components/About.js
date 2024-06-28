import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import profileImage from '../assets/mustafa.jpg'; // Adjust the path accordingly
import './About.css';

const About = (props) => {
  return (
    <div className="about-wrapper">
      <div  style={{ color: props.mode === 'dark' ? 'white' : 'black', fontSize: '50px', fontWeight: 'bold', marginBottom: '30px', fontFamily: "'Courier New', 'Courier', 'monospace'" }}>DEVELOPER</div>
      <div className="about-container">
        <div className="profile-card">
          <div className="img">
            <img src={profileImage} alt="Mustafa" />
          </div>
          <div className="caption">
            <h3>Mustafa</h3>
            <p>Full Stack Developer</p>
            <div className="social-links">
              <a className= "mx-2 " href="https://www.facebook.com/mustafa.tinwala.3745/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
              <a className= "mx-2 " href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
              <a className= "mx-2 " href="https://www.instagram.com/_.mustafa._52/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
