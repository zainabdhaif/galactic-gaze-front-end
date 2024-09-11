import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import eventService from "../../services/eventService";
import "./EventDetails.css";
import authService from "../../services/authService";

const EventDetails = (props) => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();
  const user = authService.getUser();
  // const [observation, setObservation] = useState(null);
  // const [loading, setLoading] = useState(true);

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
    return (
      <main className="container mt-4">
        <h3>Loading...</h3>
      </main>
    );
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
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
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
            <div className="row">
              <div className="col">
                <button
                  className="btn btn-primary p-2"
                  onClick={() => navigate(`/events/${eventId}/edit`)}
                >
                  Edit
                </button>
              </div>

              <div className="col">
                <button
                  className="btn btn-danger p-2"
                  onClick={() => props.handleRemoveEvent(eventId)}
                >
                  Delete
                </button>
              </div>
            </div>
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
        <h4 className="observations-title">Observations:</h4>
        {event.observations && event.observations.length > 0 ? (
          <div className="observations-container">
            {event.observations.map((observation, index) => (
              <Link key={observation._id} to={`/observations/${observation._id}` } className="linkObs">
              <div className="card-obs" key={index}>
                <div className="card-header">
                  <img src={observation.image} className="card-top" alt="Observation" />
                  <h5 className="card-title">Observation {index + 1}</h5>
                </div>
                <div className="card-body-obs">
                  <p className="card-text"><strong>Notes:</strong> {observation.notes}</p>
                  <p className="card-text"><strong>Visibility:</strong> {observation.visibility}</p>
                </div>
              </div>
              </Link>
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






















