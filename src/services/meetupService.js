const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/meetups`;

const add = async (eventid, formData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...formData, eventid })
        });
        return res.json();
    } catch (error) {
        console.error(error);
    }
}

const index = async () => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return res.json();
    } catch (error) {
        console.error(error);
    }
}

const show = async (meetupID) => {
    try {
        const res = await fetch(`${BASE_URL}/${meetupID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return res.json();
    } catch (error) {
        console.error(error);
    }
}

const update = async (meetupID, formData) => {
    try {
        const res = await fetch(`${BASE_URL}/${meetupID}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        return res.json();
    } catch (error) {
        console.error(error);
    }
}

const deleteEvent = async (meetupID) => {
    try {
        const res = await fetch(`${BASE_URL}/${meetupID}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            }
        })
        return res.json();
    } catch (error) {
        console.error(error);
    }
}

export default { index, show, update, deleteEvent, add }