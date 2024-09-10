import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import observationService from "../../services/observationService";
import eventService from "../../services/eventService";
import auth from "../../services/authService";
import './ObservationForm.css';

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
      navigate(`/mysky`);
    } catch (error) {
      console.error("Error creating observation:", error);
    }
  };

  if (!eventDetails) return <h1>Loading event details...</h1>;

  return (
    <div className="form-background">
      <h3 className="event-title">Add Observation for {eventDetails.name}</h3>
      <video
        className="background-video"
        src="https://cdn.pixabay.com/video/2021/02/20/65781-515412168_large.mp4"
        autoPlay
        muted
        loop
      >
        Your browser does not support the video tag.
      </video>
      <main className="container-form text-white mt-4 ">
        <div className="row">
          <div className="col-md-6">
            <p className="lead">{eventDetails.description}</p>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="form p-4 rounded shadow-sm">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="visibility" className="form-label">Visibility</label>
                  <input
                    type="text"
                    id="visibility"
                    name="visibility"
                    value={observation.visibility}
                    onChange={handleChange}
                    className="form-input form-control"
                    required
                  />
                </div>
                
              </div>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <label htmlFor="image" className="form-label">Image URL (optional)</label>
                  <input
                    id="image"
                    name="image"
                    value={observation.image}
                    onChange={handleChange}
                    className="form-input form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-3">
                <label htmlFor="notes" className="form-label">Notes</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={observation.notes}
                    onChange={handleChange}
                    className="form-input form-control"
                    required
                  />
                </div>
              </div>
              
              <button type="submit" className="btn btn-primary w-100">Submit Observation</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ObservationForm;
