import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import observationService from "../../services/observationService"; 
import Swal from 'sweetalert2'; 
import './ObservationDetails.css';

const ObservationDetails = () => {
  const { id } = useParams();
  const [observation, setObservation] = useState(null);
  const [loading, setLoading] = useState(true);

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
    <div className="obs-container">
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
      </div>
    </div>
  );
};

export default ObservationDetails;