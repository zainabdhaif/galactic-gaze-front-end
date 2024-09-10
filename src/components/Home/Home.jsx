import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';
import eventService from '../../services/eventService';

import './Home.css';

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchAllEvents = async () => {
      const eventsData = await eventService.index();
      setEvents(eventsData);
    };
    
    fetchAllEvents();
  }, []);
  
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/events');
  };

  const handleGazeClick = () => {
    navigate('/meetups'); 
  };

  const handleQuizClick = () => {
    navigate('/quiz'); 
  };

  return (
    <div className="home">
      
      <main className="main">
        
    <div className="video-background">
        <video autoPlay loop muted className="background-video">
            {/* <source src="https://cdn.pixabay.com/video/2022/10/30/137083-765727898_large.mp4" type="video/mp4" /> */}
            <source src="https://cdn.pixabay.com/video/2024/08/30/228835_large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="content">
            <div className="text-section">
                <h1>The Sky Is Closer Than You Think!</h1>
                <p>
                    Discover which celestial objects are visible from your location and pinpoint the optimal times for observation. Get real-time updates on planets, stars, and other astronomical events, so you never miss a chance to witness the wonders of the night sky.
                </p>
                <div className="buttons">
                    <button className="explore" onClick={handleExploreClick}>
                        Explore
                    </button>
                    <button className="quiz" onClick={handleQuizClick}> 
                        Take a Quiz
                    </button>
                </div>
            </div>
          
        </div>
    </div>
</main>

   <div className="discover-section">
          <div className="discover-image">
            <img 
              src="https://cdn.pixabay.com/photo/2024/08/26/12/29/milky-way-8999255_1280.jpg" 
              alt="Discover the Universe" 
            />
          </div>
          <div className="discover-text">
            <h2>Discover the universe</h2>
            <p>Where every star tells a story and every galaxy whispers secrets</p>
            <button className="learn-button">Learn About Our Home</button>
          </div>
    </div>

      <section className="upcoming-events">
         <UpcomingEvents cards={events}/>
      </section>


      

      <div className="adventure-section">
      <img 
  src="stargazing_8784535.png" 
  alt="Stargazing Icon" 
  className="adventure-icon" 
/>
          <h2>Are you ready to embark on a cosmic adventure?</h2>
          <p>
            Join our <strong>Galactic Gaze</strong> meetups and connect with fellow astronomy enthusiasts! Whether you're a seasoned stargazer or just starting to explore the wonders of the night sky, our community welcomes you.
          </p>
          <button className="gaze-button" onClick={handleGazeClick}> 
            Let's gaze together!
          </button>
        </div>
    </div>
  );
};

export default Home;