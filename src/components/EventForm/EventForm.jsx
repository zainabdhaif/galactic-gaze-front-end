import { useState } from 'react';
import './EventForm.css';
import {useNavigate} from 'react-router-dom';

const EventForm = ({ handleAddEvent }) => {
  const navigate = useNavigate();
  const today = new Date().toISOString().split('T')[0];
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    coordinates: '',
    datetime: today,
    image: '',
    video: ''
  });

  const handleChange = (evt) => {
    setFormData({ ...formData,
       [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleAddEvent(formData);
    navigate("/events");
  };

  return (
    <div className="form-background">
      <h3 className="event">Add New Event</h3>
      <video className="background-video" autoPlay muted loop>
        <source src="https://cdn.pixabay.com/video/2019/06/23/24623-345209544_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <main className="container-form text-white mt-4">
        <form onSubmit={handleSubmit} className="form-container p-4 rounded shadow-sm">
          
          <div className="row">
            <div className="col-6 mb-3">
              <label htmlFor="name-input" className="form-label">Name</label>
              <input
                required
                type="text"
                name="name"
                id="name-input"
                className="form-input form-control"
                value={formData.name}
                onChange={handleChange}
                placeholder="Event Name"
              />
            </div>
            <div className="col-6 mb-3">
              <label htmlFor="datetime-input" className="form-label">Date and Time</label>
              <input
                required
                type="datetime-local"
                name="datetime"
                id="datetime-input"
                className="form-input form-control"
                value={formData.datetime}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6 mb-3">
              <label htmlFor="location-input" className="form-label">Location</label>
              <input
                required
                type="text"
                name="location"
                id="location-input"
                className="form-input form-control"
                value={formData.location}
                onChange={handleChange}
                placeholder="Event Location"
              />
            </div>
            <div className="col-6 mb-3">
              <label htmlFor="coordinates-input" className="form-label">Coordinates</label>
              <input
                required
                type="text"
                name="coordinates"
                id="coordinates-input"
                className="form-input form-control"
                value={formData.coordinates}
                onChange={handleChange}
                placeholder="Event Coordinates"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6 mb-3">
              <label htmlFor="image-input" className="form-label">Image URL</label>
              <input
                required
                type="text"
                name="image"
                id="image-input"
                className="form-input form-control"
                value={formData.image}
                onChange={handleChange}
                placeholder="Image URL"
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
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default EventForm;
