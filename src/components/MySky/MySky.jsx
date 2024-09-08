import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import observationService from "../../services/observationService"; 
import auth from "../../services/authService"; 

const MySky = () => {
  const [observations, setObservations] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
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
    return <h1>Loading observations...</h1>; // Loading message
  }

  return (
    <div className="container mysky-container">
      <h2 className="obsh22">{user.username}'s Observations</h2>
      {observations.length == 0 ? (
        <p className="no-obs-text">No observations found.</p>
      ) : (
        <div className="row">
          {observations.map((observation) => (
            <div key={observation._id} className="col-md-4">
              <div className="card observation-card">
                {observation.image && (
                  <img 
                    src={observation.image} 
                    alt="Observation" 
                    className="card-img-top observation-img" 
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title"><strong>Event:</strong> {observation.eventid.name}</h5>
                  <Link to={`/observations/${observation._id}`} className="btn btn-primary">View Details</Link>
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