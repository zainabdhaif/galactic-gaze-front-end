import meetupService from "../../services/meetupService";
import { useState, useEffect } from "react";
import authService from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import BookingList from "../BookingList/BookingList";
import bookingService from "../../services/bookingService";

const MeetupList = () => {
  const [meetups, setMeetups] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = authService.getUser();
  const navigate = useNavigate();

  useEffect(() => {
    const getMeetups = async () => {
      try {
        const meetupData = await meetupService.index();
        setMeetups(meetupData);
      } catch (error) {
        console.error("Error fetching meetups:", error);
      } finally {
        setLoading(false);
      }
    };
    getMeetups();
  }, []);

  useEffect(() => {
    const fetchBookings = async () => {
      if (user && user.id) {
        try {
          const userBookings = await bookingService.index(user.id);
          setBookings(userBookings);
        } catch (error) {
          console.error("Error fetching bookings:", error);
        }
      }
    };
    fetchBookings();
  }, [user]);

  const formatDateTime = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleString();
  };

  const handleDelete = async (meetupID) => {
    if (!user || user.type !== "club") return; // Ensure only clubs can delete

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6a0dad",
      cancelButtonColor: "#8b0000",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await meetupService.deleteEvent(meetupID);
        Swal.fire("Deleted!", "The meetup has been deleted.", "success");
        navigate("/meetups");
        // Consider removing the need to reload the page
        // Instead, update the state to remove the deleted meetup
        setMeetups(meetups.filter(meetup => meetup._id !== meetupID));
      } catch (error) {
        console.error("Error deleting meetup:", error);
        Swal.fire("Error!", "There was an error deleting the meetup.", "error");
      }
    }
  };

  const handleBooking = async (meetupID) => {
    if (!user || user.type !== "user") return; // Ensure only users can book

    try {
      const bookingData = {
        userid: user.id,
        meetupid: meetupID,
      };
      await bookingService.create(bookingData);
      Swal.fire("Booked!", "The meetup has been booked.", "success");
      navigate("/meetups");
      // Consider removing the need to reload the page
      // Instead, update the state to include the new booking
      setBookings([...bookings, bookingData]);
    } catch (error) {
      console.error("Error creating booking:", error);
      Swal.fire("Error!", "There was an error creating the booking.", "error");
    }
  };

  if (loading) return <h3>Loading...</h3>;

  return (
    <>
      {user && bookings.length > 0 ? (
        <BookingList bookings={bookings} />
      ) : null}
      <div className="container mt-4">
        <h1 className="text-center mb-4">Upcoming Astro Gatherings</h1>
        <div className="row">
          {meetups.length > 0 ? (
            meetups.map((meetup) => (
              <div key={meetup._id} className="col-md-6 col-lg-4 mb-4">
                <div className="card">
                  <img
                    src={meetup.eventid.image}
                    alt={meetup.eventid.name}
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
                          <button
                            className="btn btn-primary"
                            onClick={() => handleBooking(meetup._id)}
                          >
                            Book Now
                          </button>
                        ) : user.type === "club" ? (
                          <div className="row">
                            <div className="col-6">
                              <Link
                                key={meetup._id}
                                to={meetup._id}
                                className="btn btn-primary p-2 m-0"
                              >
                                Edit
                              </Link>
                            </div>
                            <div className="col-6">
                              <button
                                className="btn btn-danger p-2 m-0"
                                onClick={() => handleDelete(meetup._id)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ) : null
                      ) : null}
                    </div>
                  </div>
                </div>
                <br />
                <hr />
              </div>
            ))
          ) : (
            <h3 className="text-center mb-3 pb-3">No meetups available</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default MeetupList;
