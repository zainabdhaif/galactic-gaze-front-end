import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import meetupService from "../../services/meetupService";

const MeetupForm = () => {
  const meetupID = useParams();
  const [meetup, setMeetup] = useState({});
  const [event, setEvent] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getMeetup = async () => {
      const meetupData = await meetupService.show(meetupID.id);
      setMeetup(meetupData);
      setEvent(meetupData.eventid);
    };
    getMeetup();
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
      await meetupService.update(meetupID.id, meetup);
      navigate("/meetups");
    } catch (error) {
      console.error("Error updating event:", error);
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
