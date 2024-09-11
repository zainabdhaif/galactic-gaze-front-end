import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import authService from "./services/authService";
import eventService from "./services/eventService";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Swal from 'sweetalert2';

import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Dashboard from "./components/Home/Home";
import SignupForm from "./components/SignupForm/SignupForm";
import SigninForm from "./components/SigninForm/SigninForm";
import Footer from "./components/Footer/Footer";
import MeetupList from "./components/MeetupList/MeetupList";
import MeetupForm from "./components/MeetupForm/MeetupForm";
import EventList from "./components/EventList/EventList";
import EventDetails from "./components/EventDetails/EventDetails";
import ObservationForm from "./components/ObservationForm/ObservationForm";
import MySky from "./components/MySky/MySky";
import ObservationDetails from "./components/ObservationDetails/ObservationDetails";
import EditObservation from "./components/EditObservation/EditObservation";
import EventForm from './components/EventForm/EventForm';
import EventEdit from './components/EventEdit/EventEdit';
import Quiz from './components/Quiz/Quiz';


const App = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(authService.getUser());
  const [events, setEvents] = useState(null);

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  const handleRemoveEvent = async (eventId) => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#6a0dad',
        cancelButtonColor: '#8b0000',
        confirmButtonText: 'Yes, delete it!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          await eventService.deleteEvent(eventId);
          navigate("/events");
        }
      });
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleAddEvent = async (formData) => {
    const newEvent = await eventService.create(formData);
    setEvents([...events, newEvent]); 
    navigate("/events");
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar user={user} handleSignout={handleSignout} />
      <main className="flex-grow-1">
        <Routes>

        <Route path="/events" element={<EventList events={events} />} />
        <Route path="/events/:eventId" element={<EventDetails handleRemoveEvent={handleRemoveEvent}/>} />

          {user ? (

            <>
             <Route path="/events/new" element={<EventForm handleAddEvent={handleAddEvent} />}
            />
             <Route path="/events/:eventId/edit" element={<EventEdit />}/>
              <Route path="/" element={<Dashboard user={user} />} />
              {user.type === "club" ? (
                <>
                  <Route path='/meetups/:meetupid' element={<MeetupForm />} />
                  <Route path='/events/:eventid/meetups/new' element={<MeetupForm/>}/>
                </>              ) : null}
            </>
          ) : (
            <Route path="/" element={<Dashboard />} />
          )}
          <Route path="/signup" element={<SignupForm setUser={setUser} />} />
          <Route path="/signin" element={<SigninForm setUser={setUser} />} />
          <Route path="/meetups" element={<MeetupList />} />
          <Route
            path="/events/:eventId/observations/new"
            element={<ObservationForm />}
          />
          <Route path="/mysky" element={<MySky />} />
          <Route path="/observations/:id" element={<ObservationDetails />} />
          <Route path="/observations/edit/:id" element={<EditObservation />} />
          <Route path="/quiz" element={<Quiz />} />  
          <Route path="/about" element={<About />} /> 
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
