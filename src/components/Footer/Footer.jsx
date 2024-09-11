import './footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
            At Galactic Gaze, we are passionate about connecting our community through amazing events and unforgettable experiences. Our mission is to inspire curiosity about the universe and foster a love for astronomy. Join us as we explore the wonders of the cosmos together!            </p>
          </div>
          <div className="col-md-4">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/About">About</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: info@GalacticGaze.com</p>
            <p>Phone: (973) 7791-7710</p>
          </div>
        </div>
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Galactic Gaze. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;