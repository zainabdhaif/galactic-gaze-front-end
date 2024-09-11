const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/events`;

const index = async () => {
  try {
   // console.log(BASE_URL)
    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const show = async (eventid) => {
  try {
    const res = await fetch(`${BASE_URL}/${eventid}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const create = async (formData) => {
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  };
  
  const res = await fetch(BASE_URL, options);

  return res.json();
};

const deleteEvent = async (eventId) => {
  try {
    const res = await fetch(`${BASE_URL}/${eventId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return res.json();
  
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

async function update(eventId, eventFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${eventId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventFormData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default {
    index,  
    show, 
    create ,
    deleteEvent,
    update
  };