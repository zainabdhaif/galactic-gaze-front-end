import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import observationService from "../../services/observationService"; 
import auth from "../../services/authService"; 
import "./MySky.css";

const MySky = () => {
  const [observations, setObservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = auth.getUser(); 

  useEffect(() => {
    const fetchObservations = async () => {
      try {
        const id = user.id;
        const userObservations = await observationService.index(id); 
        setObservations(userObservations);
      } catch (error) {
        console.error("Error fetching observations:", error);
      } finally {
        setLoading(false); 
      } 
    };

    fetchObservations();
  }, [user.id]);

  if (loading) {
    return <h1 className="loading-text">Loading observations...</h1>;
  }

  return (
    <div className="container mysky-container">
      <h2 className="mysky-header">{user.username}'s Observations</h2>
      {observations.length === 0 ? (
        <p className="no-observations-text">No observations found.</p>
      ) : (
        <div className="row mysky-observation-row">
          {observations.map((observation) => (
            <div key={observation._id} className="col-md-4 mysky-observation-col">
              <div className="card mysky-observation-card">
                {observation.image && (
                  <img 
                    src={observation.image} 
                    alt="Observation" 
                    className="card-img-top mysky-observation-img" 
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title mysky-card-title">
                    Event: {observation.eventid.name}
                  </h5>
                  <Link to={`/observations/${observation._id}`} className="btn mysky-view-btn">
                    View Observation
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MySky;