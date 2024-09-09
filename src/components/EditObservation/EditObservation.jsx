import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import observationService from "../../services/observationService";
import auth from "../../services/authService";
import Swal from 'sweetalert2'; 
import './EditObservation.css';  // Make sure this CSS file exists

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
    <div className="form-background">
    
      <video className="background-video" src="https://cdn.pixabay.com/video/2021/02/20/65781-515412168_large.mp4" autoPlay muted loop>
        Your browser does not support the video tag.
      </video>
      <main className="container-form text-white mt-4">
        <h3 className="mb-3"> Edit {observation.eventid.name} Observation</h3>
    
          

        <form onSubmit={handleSubmit} className="form-container p-4 rounded shadow-sm">
          <div className="row">
            <div className="col-12 mb-3">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="visibility" className="form-label">
                    Visibility
                  </label>
                  <input
                    type="text"
                    id="visibility"
                    name="visibility"
                    value={observation.visibility}
                    onChange={handleChange}
                    className="form-input form-control"
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="image" className="form-label">
                    Image URL (optional)
                  </label>
                  <input
                    id="image"
                    name="image"
                    value={observation.image}
                    onChange={handleChange}
                    className="form-input form-control"
                  />
                </div>

            <div className="col-12 mb-3">
              <div className="row">
                

                <div className="col-md-6 mb-3">
                  <label htmlFor="notes" className="form-label">
                    Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={observation.notes}
                    onChange={handleChange}
                    className="form-input form-control"
                    required
                  />
                </div>
                 </div>
            </div>

               
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Save Changes
          </button>
          <button type="button" className="btn btn-secondary w-100 mt-2" onClick={() => navigate(-1)}>
            Cancel
          </button>
        </form>
      </main>
    </div>
  );
};

export default EditObservation;
