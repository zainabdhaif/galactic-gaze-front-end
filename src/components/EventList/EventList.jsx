import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import eventService from '../../services/eventService';
import authService from '../../services/authService';
import './EventList.css';

const EventList = () => {
  const [user, setUser] = useState(authService.getUser());
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearch] = useState(""); 

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllEvents = async () => {
      const eventsData = await eventService.index();
      setEvents(eventsData);
    };

    fetchAllEvents();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredEvents = events.filter(event => {
    return (
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      new Date(event.datetime).toLocaleDateString().includes(searchTerm)
    );
  });

  const handleCardClick = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  return (
    <div className="container my-4">
      <h1 className="mb-4 head">Latest News on Astronomy and Sky Watching</h1>
      <p className="mb-4 text-white para">
        Never miss an exciting event in the night sky with the Star Walk space news — your online guide to the latest astronomy events and celestial bodies visible tonight. Find out how and when to observe meteor showers, solar and lunar eclipses, Starlink satellites, planetary events, comets, and more. Learn the astronomy terms, see stargazing forecasts for Northern and Southern Hemispheres, and get observation tips.
      </p>
      <hr />
      <div className="video-container mb-4">
        <video className="video controls autoPlay loop" src="path-to-your-video.mp4" type="video/mp4" autoPlay muted loop>
           
          Your browser does not support the video tag.
        </video>
      </div>
      <hr />

      <div className="mb-4 position-relative">
  <input
    type="text"
    className="form-control search"
    placeholder="Explore Events By Name or Date"
    value={searchTerm}
    onChange={handleSearchChange}
  />
  <i className="fas fa-search search-icon"></i>
</div>

      {events.length === 0 ? (
        <div className="alert alert-info text-center">
          No events available at this time. Please check back later.
        </div>
      ) : (
        <div className="card-group">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div 
                key={event._id} 
                className="card" 
                onClick={() => handleCardClick(event._id)}
                role="button" 
              >
                <div className="card-img-body" style={{ backgroundImage: `url(${event.image})` }}>
                  <div className="card-overlay">
                    <div className="card-body">
                      <h5 className="card-title">{event.name}</h5>
                      <p className="card-text">
                        <small>
                          {new Date(event.datetime).toLocaleDateString()}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="alert alert-warning text-center">
              No events match your search criteria.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EventList;