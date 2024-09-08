import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import eventService from "../../services/eventService";
import './EventDetails.css';

const EventDetails = (props) => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getEvent() {
      try {
        const eventData = await eventService.show(eventId);
        setEvent(eventData);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    }
    getEvent();
  }, [eventId]);

  if (!event) {
    return <main className="container mt-4"><h3>Loading...</h3></main>;
  }

  return (
    
    <main className="container mt-4">
      <h1 className="display-4">{event.name}</h1>
      
      <header className="header mb-4">
        
        <div className="cover">
      
            <video 
              className="event-video"
              src={event.video} 
              autoPlay 
              muted 
              loop 
              playsInline 
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
        
        </div>
      </header>

      <div className="row mb-4">
        <div className="col-md-8">
    
          <p>Date & Time: {new Date(event.datetime).toLocaleString()}</p>
          <p>{event.description}</p>
          <p>Location: {event.location}</p>
          <p>Coordinates: {event.coordinates}</p>
        </div>
      </div>
       
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate(`/events/${eventId}/edit`)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger mt-3"
          onClick={() => props.handleRemoveEvent(eventId)}
        >
          Delete
        </button>
      </div>
    </main>
  );
};

export default EventDetails;
