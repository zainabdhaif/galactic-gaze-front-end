import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

const UpcomingEvents = () => {
  return (
    <section className="upcoming-events">
      <h2>Upcoming Events</h2>
      <div className="events">

        <MDBCarousel showControls>
            
          <MDBCarouselItem
            className="active"
            itemId={1}
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
            alt="Sunset Over the City"
          >
           <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100" alt="Canyon at Night" />
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselItem>

          <MDBCarouselItem itemId={2} src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" alt="Canyon at Night">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100" alt="Canyon at Night" />
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselItem>

          <MDBCarouselItem itemId={3} src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" alt="Cliff Above a Stormy Sea">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100" alt="Canyon at Night" />
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselItem>
        </MDBCarousel>
      </div>
    </section>
  );
};

export default UpcomingEvents;