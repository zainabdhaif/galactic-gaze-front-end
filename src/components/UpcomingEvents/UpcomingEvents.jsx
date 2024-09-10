import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import React from 'react';
import { Link } from 'react-router-dom';

const UpcomingEvents = ({ cards }) => {
  return (
    <section className="upcoming-events">
      <h2>Upcoming Events</h2>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {cards.slice(0, 4).map((event, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {cards.slice(0, 4).map((event, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
            <Link to={`/events/${event._id}`}>
              <img src={event.image} className="d-block w-100" alt={event.title} />
              <div className="carousel-caption d-none d-md-block">
                <h5>{event.title}</h5>
                <p>{event.description}</p>
              </div>
              </Link>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default UpcomingEvents;