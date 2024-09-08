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
    <main className="container-edit mt-4">
      <h1>Edit Event</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Event Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="coordinates" className="form-label">Coordinates</label>
          <input
            type="text"
            className="form-control"
            id="coordinates"
            name="coordinates"
            value={formData.coordinates}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="video" className="form-label">Video URL (optional)</label>
          <input
            type="text"
            className="form-control"
            id="video"
            name="video"
            value={formData.video}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Event</button>
      </form>
    </main>
  );
};

export default EventEdit;
