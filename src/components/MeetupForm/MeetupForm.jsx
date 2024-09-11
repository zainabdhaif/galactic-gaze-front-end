import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import meetupService from "../../services/meetupService";
import eventService from "../../services/eventService";
import Swal from 'sweetalert2';

const MeetupForm = () => {
  const { eventid, meetupid } = useParams();
  const [meetup, setMeetup] = useState({});
  const [event, setEvent] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (meetupid) {
      const getMeetup = async () => {
        const meetupData = await meetupService.show(meetupid);
        setMeetup(meetupData);
        setEvent(meetupData.eventid);
      };
      getMeetup();
    } else if (eventid) {
      const getEvent = async () => {
        const eventData = await eventService.show(eventid);
        setEvent(eventData);
      };
      getEvent();
    }
  }, []);

  console.log(event.image);
  

  const formatDateTime = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleString();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeetup((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (meetupid) {
        // Update existing event
        await meetupService.update(meetupid, meetup);
        Swal.fire({
          title: 'Meetup Updated!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          navigate("/meetups");
        });
      } else {
        await meetupService.add(eventid, meetup);
        Swal.fire({
          title: 'Meetup Created!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          navigate("/meetups");
        });
      }
    } catch (error) {
      console.error("Error processing meetup:", error);
    }
  };

  return (
    <div className="form-background">
      {meetupid ? (
        <h3 className="event text-white">Edit Meetup</h3>
      ) : (
        <h3 className="event text-white">Add Meetup</h3>
      )}
      <video
        className="background-video"
        src={event.image}
        autoPlay
        muted
        loop
      ></video>
      <main className="container-form text-white mt-4">
        <form
          onSubmit={handleSubmit}
          className="form-container p-4 rounded shadow-sm bg-dark"
        >
          <div className="row mb-3">
            <div className="col-12">
              <label htmlFor="eventid" className="form-label text-white">
                Event Name
              </label>
              <p id="eventid" className="form-control-plaintext text-white">
                {event.name}
              </p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <label htmlFor="description" className="form-label text-white">
                Event Description
              </label>
              <p id="description" className="form-control-plaintext text-white">
                {event.description}
              </p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <label htmlFor="datetime" className="form-label text-white">
                Event Date/Time
              </label>
              <p id="datetime" className="form-control-plaintext text-white">
                {formatDateTime(event.datetime)}
              </p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <label htmlFor="location" className="form-label text-white">
                Meetup Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="form-control"
                value={meetup.location}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};
export default MeetupForm;
