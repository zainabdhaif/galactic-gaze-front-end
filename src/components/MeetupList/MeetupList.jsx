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
      <h1>Upcoming Astro Gatherings</h1>
      <div>
        {meetups.map((meetup) => (
          <div key={meetup._id}>
            <h3>{meetup.eventid.name}</h3>
            <p>
              <strong>Organized by:</strong> {meetup.userid.username}
            </p>
            <p>
              <strong>Description:</strong> {meetup.eventid.description}
            </p>
            <p>
              <strong>Date/Time:</strong>
              {formatDateTime(meetup.eventid.datetime)}
            </p>
            <p>
              <strong>Location:</strong> {meetup.location}
            </p>
            <img src={meetup.eventid.image} alt={meetup.eventid.image} /> <br />
            {user ? (
              user.type === "user" ? (
                <button>Book Now</button>
              ) : user.type === "club" ? (
                <>
                  <Link key={meetup._id} to={meetup._id}>
                    <button>Edit</button>
                  </Link>

                  <button onClick={() => handleDelete(meetup._id)}>
                    Delete
                  </button>
                </>
              ) : null
            ) : null}
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default MeetupList;
