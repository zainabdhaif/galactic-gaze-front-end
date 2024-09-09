import meetupService from "../../services/meetupService";
import { useState, useEffect } from "react";
import authService from "../../services/authService";
import { Link } from "react-router-dom";

const MeetupList = () => {
  const [meetups, setMeetups] = useState([]);
  const user = authService.getUser();

  useEffect(() => {
    const getMeetups = async () => {
      const meetupData = await meetupService.index();
      setMeetups(meetupData);
    };
    getMeetups();
  }, []);

  const formatDateTime = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleString();
  };

  const handleDelete = (meetupID) => {
    meetupService.deleteEvent(meetupID);
    location.reload();
  };

  return (
    <>
      <div className="container mt-4">
        <h1 className="text-center mb-4">Upcoming Astro Gatherings</h1>
        <div className="row">
          {meetups.map((meetup) => (
            <div key={meetup._id} className="col-md-6 col-lg-4 mb-4">
              <div className="card">
                <img
                  src={meetup.eventid.image}
                  alt={meetup.eventid.image}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{meetup.eventid.name}</h5>
                  <p className="card-text">
                    <strong>Organized by:</strong> {meetup.userid.username}
                  </p>
                  <p className="card-text">
                    <strong>Description:</strong> {meetup.eventid.description}
                  </p>
                  <p className="card-text">
                    <strong>Date/Time:</strong>
                    {formatDateTime(meetup.eventid.datetime)}
                  </p>
                  <p className="card-text">
                    <strong>Location:</strong> {meetup.location}
                  </p>
                  <div className="d-flex justify-content-between">
                    {user ? (
                      user.type === "user" ? (
                        <button className="btn btn-primary">Book Now</button>
                      ) : user.type === "club" ? (
                        <>
                          <Link
                            key={meetup._id}
                            to={meetup._id}
                            className="btn btn-primary me-2"
                          >
                            Edit
                          </Link>

                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(meetup._id)}
                          >
                            Delete
                          </button>
                        </>
                      ) : null
                    ) : null}
                  </div>
                </div>
              </div>
              <br />
              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MeetupList;
