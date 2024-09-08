import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import observationService from "../../services/observationService";
import eventService from "../../services/eventService";
import auth from "../../services/authService";


const ObservationForm = () => {
  const user = auth.getUser();

  const navigate = useNavigate();
  const { eventId } = useParams();
  const [observation, setObservation] = useState({
    visibility: "",
    notes: "",
    image: "",
    eventid: eventId,
    userid: user.id,
  });

  const [eventDetails, setEventDetails] = useState(null);
  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const eventData = await eventService.show(eventId);
        setEventDetails(eventData);
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };
    fetchEventDetails();
  }, [eventId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setObservation((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await observationService.create(observation);
      navigate(`/events/${eventId}`);
    } catch (error) {
      console.error("Error creating observation:", error);
    }
  };

  if (!eventDetails) return <h1>Loading event details...</h1>;

  return (
    <div className="container mt-4">
      <h2 className="obsh2">Add Observation for {eventDetails.name}</h2>

      <div className="row">
        <div className="col-md-6">
          <img
            src={eventDetails.image}
            alt={eventDetails.name}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h3 className="mb-3">{eventDetails.name}</h3>
          <p className="lead" id="observ">{eventDetails.description}</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="visibility" className="form-label">
                Visibility
              </label>
              <input
                type="text"
                id="visibility"
                name="visibility"
                value={observation.visibility}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="notes" className="form-label">
                Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                value={observation.notes}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image URL (optional)
              </label>
              <input
                id="image"
                name="image"
                value={observation.image}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit Observation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ObservationForm;
