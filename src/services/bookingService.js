const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/bookings`;

const create = async (bookingData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        });
        return res.json();
    } catch (error) {
        console.error(error);
    }
};

const index = async () => {
    try {
      const res = await fetch(BASE_URL, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
  
      return res.json();
    } catch (error) {
      console.error("Error fetching bookings:", error);
      throw error;
    }
  };

  const remove = async (bookingID) => {
    try {
        const res = await fetch(`${BASE_URL}/${bookingID}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default { create, index, remove};