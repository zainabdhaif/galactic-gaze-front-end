import { useEffect } from "react";
import bookingService from "../../services/bookingService";
import {useNavigate } from 'react-router-dom';
import './BookingList.css'; // Adjust the path as necessary

const BookingList = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        console.log(props.bookings); // Log bookings to inspect structure
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
        <h2>My bookings:</h2>
        <div className="bookings-index">
            {props.bookings.map((booking) => (
                <div key={booking._id}>
                    <p>Meetup event: {booking.meetupid.eventid.name}</p>
                    <p>Meetup location: {booking.meetupid.location}</p>
                    <button className="btn btn-danger" onClick={() => handleDelete(booking._id)}> Delete </button>

                </div>
            ))}
        </div>
        </>
    );
};

export default BookingList;