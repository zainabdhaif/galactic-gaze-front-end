import { Link } from "react-router-dom";
import "./NavBar.css";
import { useEffect } from "react";

const NavBar = ({ user, handleSignout }) => {
  useEffect(() => {
    const nav = document.querySelector("nav");
    const ul = document.querySelector("ul");
    window.onscroll = function () {
      if (window.scrollY > 100) {
        nav.classList.add("scrolled");
        ul.classList.add("hidden");
      } else {
        nav.classList.remove("scrolled");
        ul.classList.remove("hidden")
      }
    };
  });

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand baloo-2-logo" to="/">
          Galactic<span className="dot">.</span>Gaze
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Meetups">
                Meetups
              </Link>
            </li>
            {user && user.type === "admin" && (
              <li className="nav-item">
                <Link className="nav-link" to="/events/new">
                  Add Event
                </Link>
              </li>
            )}
            {user && user.type === "user" && (
              <li className="nav-item">
                <Link className="nav-link" to="/mysky">
                  My Sky
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav ms-auto">
            {user ? (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={handleSignout}
                >
                  Sign Out
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">
                    <button className="btn">Log in</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    <button className="btn btn-primary">Sign up</button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
