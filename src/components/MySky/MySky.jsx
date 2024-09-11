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
      setLoading(true);
      try {
        const userObservations = await observationService.index(user.id);
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
    return (
      <main className="container mt-4">
        <h3>Loading...</h3>
      </main>
    );
  }

  return (
    <main className="container mysky-container mt-4">
      <h2 className="display-4">{user.name}'s Observations</h2>

      <div className="row mysky-observation-row">
        {observations.length > 0 ? (
          observations.map((observation) => (
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
          ))
        ) : (
          <p>No observations found.</p>
        )}
      </div>
    </main>
  );
};

export default MySky;