import { useState, useEffect } from "react";
import bookingService from "../../services/bookingService";
import {useNavigate } from 'react-router-dom';
import './BookingList.css'; 
import Swal from "sweetalert2";

const BookingList = (props) => {
    const navigate = useNavigate();
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        console.log(props.bookings); 
    }, [props.bookings]);

    const handleDelete = async (bookingID) => {
      
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
            await bookingService.remove(bookingID);
            Swal.fire("Deleted!", "The booking has been deleted.", "success");
            setBookings(bookings.filter(booking => booking._id !== bookingID));
          } catch (error) {
            console.error("Error deleting booking:", error);
            Swal.fire("Error!", "There was an error deleting the booking.", "error");
          }
        }
      };
    return (
        <>
<h3>My Bookings:</h3>
<div className="bookings-index">
    {props.bookings.map((booking) => (
        <div 
            className="booking-card" 
            key={booking._id}>
            <div className="card-content">
                <p className="event-name">Meetup Event: {booking.meetupid.eventid.name}</p>
                <p className="event-location">Location: {booking.meetupid.location}</p>
                <button className="btn-book" onClick={() => handleDelete(booking._id)}>Cancel Meetup</button>
            </div>
        </div>
    ))}
</div>
        </>
    );
};

export default BookingList;