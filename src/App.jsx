import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import authService from './services/authService';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Components
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';
import Footer from './components/Footer/Footer';

const App = () => {
  const [user, setUser] = useState(authService.getUser());

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar user={user} handleSignout={handleSignout}/>
      <main className="flex-grow-1">
        <Routes>
          { user ? (
            <Route path="/" element={<Dashboard user={user} />} />
            
          ) : (
            <Route path="/" element={<Dashboard/>} />
          )}
          <Route path="/signup" element={<SignupForm setUser={setUser}/>} />
          <Route path="/signin" element={<SigninForm setUser={setUser}/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;