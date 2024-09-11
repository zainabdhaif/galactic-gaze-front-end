import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="about">
      <div className="container-about">
        <h1>About Galactic Gaze</h1>
        <p>
          Welcome to Galactic Gaze, your go-to destination for exploring the wonders of the universe! 
          We are passionate about astronomy and dedicated to bringing the beauty of the cosmos closer to you. 
          Whether you're a seasoned stargazer or just starting your journey into the night sky, we have something 
          for everyone.
        </p>
        <h2>Our Mission</h2>
        <p>
          At Galactic Gaze, our mission is to inspire curiosity and wonder about the universe. 
          We aim to provide educational resources, organize exciting events, and foster a community 
          of astronomy enthusiasts who share a love for the stars.
        </p>
        <h2>What We Offer</h2>
        <ul>
          <li>Stargazing Events: Join us for regular stargazing nights where you can observe celestial bodies through telescopes.</li>
          <li>MeetUps: Connect with fellow astronomy lovers through our Meetups For each Event you want to observe</li>
          <li>Resources: Access a wealth of information, including articles, guides, and videos about stars, planets, and more.</li>
        </ul>
        <h2>Join Us</h2>
        <p>
          We invite you to join our community and embark on an exciting journey through the stars. 
          Whether you are looking to learn, explore, or simply enjoy the beauty of the night sky, 
          Galactic Gaze is here for you. Together, let’s unlock the mysteries of the universe!
        </p>
      </div>
    </div>
  );
};

export default About;