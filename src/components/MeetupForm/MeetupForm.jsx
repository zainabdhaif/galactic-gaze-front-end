import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import meetupService from "../../services/meetupService";
import eventService from "../../services/eventService";

const MeetupForm = () => {
  const { eventid, meetupid } = useParams();
  const [meetup, setMeetup] = useState({});
  const [event, setEvent] = useState({});
  const navigate = useNavigate();

  // console.log("event", eventid, "meetup", meetupid);

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
        await meetupService.update(meetupid, meetup);
        navigate("/meetups");
      } else if (eventid) {
        await meetupService.add(eventid, meetup);
        console.log(eventid,meetup);
        navigate("/meetups");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form action="" method="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="eventid">Event Name</label>
          <input
            type="text"
            id="eventid"
            name="eventid"
            value={event.name}
            readOnly
            disabled
          />
        </div>

        <div>
          <label htmlFor="image">Event Description</label>
          <textarea
            type="text"
            id="image"
            name="image"
            value={event.description}
            readOnly
            disabled
          />
        </div>

        <div>
          <label htmlFor="datetime">Event Date/Time</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formatDateTime(event.datetime)}
            readOnly
            disabled
          />
        </div>

        <div>
          <label htmlFor="location">Meetup Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={meetup.location}
            onChange={handleChange}
          />
        </div>

        <button type="submit">submit</button>
      </form>
    </>
  );
};
export default MeetupForm;
