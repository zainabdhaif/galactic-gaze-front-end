import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import eventService from "../../services/eventService";
import Swal from 'sweetalert2';
import './EventEdit.css';

const EventEdit = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    coordinates: "",
    image: "",
    video: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchEvent() {
      try {
        const eventData = await eventService.show(eventId);
        setEvent(eventData);
        setFormData({
          name: eventData.name,
          description: eventData.description,
          location: eventData.location,
          coordinates: eventData.coordinates,
          image: eventData.image,
          video: eventData.video
        });
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    }

    fetchEvent();
  }, [eventId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await eventService.update(eventId, formData);
      Swal.fire({
        title: 'Event Updated!',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        navigate(`/events/${eventId}`);
      });
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  if (!event) {
    return <main className="container mt-4"><h3>Loading...</h3></main>;
  }

  return (
    <div className="form-background">
    <h3 className="event">Edit Event</h3>
    <video className="background-video" src="https://cdn.pixabay.com/video/2022/07/06/123311-727474301_large.mp4" autoPlay muted loop>
      {/* <source type="video/mp4" /> */}
      Your browser does not support the video tag.
    </video>
    <main className="container-form text-white mt-4">
      <form onSubmit={handleSubmit} className="form-container p-4 rounded shadow-sm">
        <div className="row">
          <div className="col-6 mb-3">
            <label htmlFor="name-input" className="form-label">Event Name</label>
            <input
              type="text"
              name="name"
              id="name-input"
              className="form-input form-control"
              value={formData.name}
              onChange={handleChange}
              placeholder="Event Name"
              required
            />
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="description-input" className="form-label">Description</label>
            <textarea
              name="description"
              id="description-input"
              className="form-input form-control"
              value={formData.description}
              onChange={handleChange}
              placeholder="Event Description"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6 mb-3">
            <label htmlFor="location-input" className="form-label">Location</label>
            <input
              type="text"
              name="location"
              id="location-input"
              className="form-input form-control"
              value={formData.location}
              onChange={handleChange}
              placeholder="Event Location"
              required
            />
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="coordinates-input" className="form-label">Coordinates</label>
            <input
              type="text"
              name="coordinates"
              id="coordinates-input"
              className="form-input form-control"
              value={formData.coordinates}
              onChange={handleChange}
              placeholder="Event Coordinates"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6 mb-3">
            <label htmlFor="image-input" className="form-label">Image URL</label>
            <input
              type="text"
              name="image"
              id="image-input"
              className="form-input form-control"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
              required
            />
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="video-input" className="form-label">Video URL (optional)</label>
            <input
              type="text"
              name="video"
              id="video-input"
              className="form-input form-control"
              value={formData.video}
              onChange={handleChange}
              placeholder="Video URL"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100">Update Event</button>
      </form>
    </main>
  </div>
  
  
  );
};

export default EventEdit;
