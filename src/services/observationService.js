const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/observations`;


const index = async () => {
    try {
      const res = await fetch(BASE_URL, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
  
      return res.json();
    } catch (error) {
      console.error("Error fetching observations:", error);
      throw error;
    }
  };
  
const create = async (formData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(formData)
        });
        return res.json();
    } catch (error) {
        console.error("Error creating observation:", error);
    }
}

const showDetails = async (observationID) => {
    try {
        const res = await fetch(`${BASE_URL}/${observationID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token for authentication
            }
        });
        return res.json();
    } catch (error) {
        console.error("Error fetching observation:", error);
    }
}
const update = async (observationId, formData) => {
    try {
      const options = {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };
  
      const res = await fetch(`${BASE_URL}/${observationId}`, options);
  
      return res.json();
    } catch (error) {
      console.error("Error updating observation:", error);
      throw error;
    }
  };
  
  const remove = async (observationId) => {
    try {
      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
  
      const res = await fetch(`${BASE_URL}/${observationId}`, options);
  
      return res.json();
    } catch (error) {
      console.error("Error deleting observation:", error);
      throw error;
    }
  };




export default { index, create, showDetails, remove, update };