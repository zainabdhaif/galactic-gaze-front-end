import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-light pt-5">
      <div className="container">
        <div className="row">

          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/events" className="text-light">Events</Link>
              </li>
              <li>
                <Link to="/about" className="text-light">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-light">Contact</Link>
              </li>
              <li>
                <Link to="/help" className="text-light">Help</Link>
              </li>
            </ul>
          </div>

        
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: info@.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Event St, City, Country</p>
          </div>

        </div>
      </div>

      <div className="text-center py-3" style={{ backgroundColor: '#fff' }}>
        <p className="mb-0">&copy; 2024 . All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
