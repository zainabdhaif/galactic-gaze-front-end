import { useEffect } from "react";
import bookingService from "../../services/bookingService";
import {useNavigate } from 'react-router-dom';
import './BookingList.css'; 

const BookingList = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        console.log(props.bookings); 
    }, [props.bookings]);

    const handleDelete = async (bookingID) => {
        try{
            await bookingService.remove(bookingID);
            navigate('/meetups'); 
            location.reload();
        }catch(error){
        console.error("Error deleting booking:", error)
        }
    }

    return (
        <>
<h3>My Bookings:</h3>
<div className="bookings-index">
    {props.bookings.map((booking) => (
        <div 
            className="booking-card" 
            key={booking._id}
        >
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