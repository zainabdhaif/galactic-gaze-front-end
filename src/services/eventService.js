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

export default {
    index,  
    show, 
    // create ,
    // deleteEvent,
    // update
  };