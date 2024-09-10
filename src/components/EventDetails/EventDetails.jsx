import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import eventService from "../../services/eventService";
import './EventDetails.css';
import authService from "../../services/authService";

const EventDetails = (props) => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();
  const user = authService.getUser();

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
      <h2 className="display-4">{event.name}</h2>
      
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
    
      <div className="row mb-4">
        <div className="col-md-8">
          <p>Date & Time: {new Date(event.datetime).toLocaleString()}</p>
          <p>{event.description}</p>
          <p>Location: {event.location}</p>
          <p>Coordinates: {event.coordinates}</p>
        </div>
      </div>
       
      <div className="d-flex justify-content-between">
      {user ? (
  user.type === "admin" ? (
    <>
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
    </>
  ) : user.type === "club" ? (
    <Link key={eventId} to={`/events/${eventId}/meetups/new`}>
      <button className="btn btn-primary mt-3">Add Meetup</button>
    </Link>
  ) : user.type === "user" ? (
    <Link key={eventId} to={`/events/${eventId}/observations/new`}>
    <button className="btn btn-primary mt-3">Add Observation</button>
  </Link>
  ) : null
) : null}
      </div>
      <div className="observation-under-event">
  <h4>Observations:</h4>
  {event.observations && event.observations.length > 0 ? (
    <div className="row">
      {event.observations.map((observation, index) => (
        <div className="col-md-4 mb-3" key={index}>
          <div className="card shadow-sm">
            <img src={observation.image} className="card-img-top" alt="Observation" />
            <div className="card-body">
              <h5 className="card-title">Observation {index + 1}</h5>
              <p className="card-text"><strong>Notes:</strong> {observation.notes}</p>
              <p className="card-text"><strong>Visibility:</strong> {observation.visibility}</p>
              {observation.objectives && observation.objectives.length > 0 ? (
                <div>
                  <strong>Objectives:</strong>
                  <ul className="list-unstyled">
                    {observation.objectives.map((objective, objIndex) => (
                      <li key={objIndex}>- {objective}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>No objectives available.</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p>No observations available.</p>
  )}
</div>
    </main>
  );
};

export default EventDetails;
