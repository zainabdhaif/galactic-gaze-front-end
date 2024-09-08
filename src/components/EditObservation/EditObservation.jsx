import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import observationService from "../../services/observationService";
import eventService from "../../services/eventService";
import auth from "../../services/authService";
import Swal from 'sweetalert2'; 

const EditObservation = () => {
  const user = auth.getUser();
  const navigate = useNavigate();
  const { id } = useParams();

  const [observation, setObservation] = useState({
    visibility: "",
    notes: "",
    image: "",
    eventid: "",
    userid: user.id,
  });

  useEffect(() => {
    const observationDetails = async () => {
      try {
        const Observation = await observationService.showDetails(id);
        setObservation(Observation);
      } catch (error) {
        console.error("Error fetching observation details:", error);
      }
    };

    observationDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setObservation((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await observationService.update(id, observation);
      await Swal.fire({
        title: 'Updated!',
        text: 'Your observation has been updated successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      navigate(`/observations/${id}`);
    } catch (error) {
      console.error("Error updating observation:", error);
      Swal.fire({
        title: 'Error!',
        text: 'There was an error updating your observation.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  if (!observation) return <h1>Loading details...</h1>;

  return (
    <div className="container mt-4">
      <h2 className="obsh2">Edit Observation for {observation.eventid.name}</h2>

      <div className="row">
        <div className="col-md-6">
          <img
            src={observation.eventid.image}
            alt={observation.eventid.name}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h3 className="mb-3">{observation.eventid.name}</h3>
          <p className="lead" id="observ">{observation.eventid.description}</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="visibility" className="form-label">
                Visibility
              </label>
              <input
                type="text"
                id="visibility"
                name="visibility"
                value={observation.visibility}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="notes" className="form-label">
                Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                value={observation.notes}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image URL (optional)
              </label>
              <input
                id="image"
                name="image"
                value={observation.image}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditObservation;