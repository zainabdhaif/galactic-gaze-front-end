import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import observationService from "../../services/observationService";
import Swal from 'sweetalert2';
import './ObservationDetails.css'; 
import authService from '../../services/authService';

const ObservationDetails = () => {
  const { id } = useParams();
  const [observation, setObservation] = useState(null);
  const [loading, setLoading] = useState(true);
const user = authService.getUser();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchObservation = async () => {
      try {
        const fetchedObservation = await observationService.showDetails(id);
        setObservation(fetchedObservation);
      } catch (error) {
        console.error("Error fetching observation details:", error);
        Swal.fire('Error!', 'Failed to fetch observation details.', 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchObservation();
  }, [id]);

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#6a0dad',
      cancelButtonColor: '#8b0000',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        await observationService.remove(id);
        Swal.fire('Deleted!', 'Your observation has been deleted.', 'success');
        navigate('/mysky');
      } catch (error) {
        console.error("Error deleting observation:", error);
        Swal.fire('Error!', 'There was an error deleting your observation.', 'error');
      }
    }
  };

  const handleEdit = () => {
    navigate(`/observations/edit/${id}`);
  };

  if (loading) {
    return <h1>Loading observation details...</h1>;
  }

  if (!observation) {
    return <h1>Observation not found.</h1>;
  }

  return (

    <div className="form-background">
      <h3 className="event">Observation Details for {observation.eventid.name}</h3>
      <video
        className="background-video"
        src="https://cdn.pixabay.com/video/2021/02/20/65781-515412168_large.mp4"
        autoPlay
        muted
        loop
      >
        Your browser does not support the video tag.
      </video>
      <main className="container-form text-white mt-4">
        <div className="row">
          <div className="col-md-6" style={{ display: 'flex', justifyContent: 'space-around'}}>
            <div className="info-container p-4 rounded shadow-sm" style={{ border: '2px solid #6a0dad', width:'300px', height:'300px'}}>
              <h5><strong>{observation.eventid.name}</strong></h5>
              <p><strong>Date & Time:</strong> {new Date(observation.eventid.datetime).toLocaleString()}</p>
              <p><strong>Location:</strong> {observation.eventid.location}</p>
              <p><strong>Coordinates:</strong> {observation.eventid.coordinates}</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-container p-4 rounded shadow-sm" style={{ border: '2px solid #6a0dad', width:'300px', height:'300px'  }}>
              {observation.image && (
                <img src={observation.image} alt="Observation" className="img-fluid" />
              )}
              <p><strong>Notes:</strong> {observation.notes}</p>
              <p><strong>Visibility:</strong> {observation.visibility}</p>
            </div>
          </div>
        </div>
       {user.id === observation.userid && 

        <div className="button-container mt-4">
          <button className="btn primary" onClick={handleEdit}>Edit</button>
          <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
}
      </main>

    {/* <div className="obs-container">
      <h2 className="obs-header">{observation.eventid.name}'s Observation Details</h2>

      <div className="obs-info-container">
        <div className="obs-event-info">
          <h5><strong>{observation.eventid.name}</strong></h5>
          <p><strong>Date & Time:</strong> {new Date(observation.eventid.datetime).toLocaleString()}</p>
          <p><strong>Location:</strong> {observation.eventid.location}</p>
          <p><strong>Coordinates:</strong> {observation.eventid.coordinates}</p>
        </div>

        <div className="obs-observation-info">
          <div className="obs-image-container">
          {observation.image && (
            <img 
            src={observation.image} 
            alt="Observation" 
            className="obs-image" 
            />
          )}
          </div>
          <p className="obs-notes"><strong>Notes:</strong> {observation.notes}</p>
          <p><strong>Visibility:</strong> {observation.visibility}</p>
        </div>
      </div>

      <div className="obs-button-container">
        <button className="obs-edit-btn" onClick={handleEdit}>Edit</button>
        <button className="obs-delete-btn" onClick={handleDelete}>Delete</button>
      </div> */}

    </div>
  );
};

export default ObservationDetails;
