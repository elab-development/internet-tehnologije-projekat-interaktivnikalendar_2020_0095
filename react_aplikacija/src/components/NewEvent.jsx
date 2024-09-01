/*import React, { useState } from 'react';

const NewEvent = ({ date, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');
  const username = "currentLoggedInUser"; 
  

  const handleSubmit = (e) => {
    e.preventDefault();
  
    onSave({ title, description, date, time, username });
  };

  return (
    <div className="new-event-overlay">
      <div className="new-event-form">
        <h3>Add New Event</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Event Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Event Description:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label>Date:</label>
            <input type="text" value={date.toDateString()} disabled />
          </div>
          <div>
            <label>Time:</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Username:</label>
            <input type="text" value={username} disabled />
          </div>
          <div>
            <button type="submit" className="save-button">Save Event</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewEvent;*/

/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewEvent = ({ date, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [userID, setUserID] = useState('');
  const [categoryID, setCategoryID] = useState('');
  const email = localStorage.getItem('userEmail'); // Retrieve the email of the logged-in user

  useEffect(() => {
    // Fetch the User ID based on the logged-in user's email
    axios.get(`http://127.0.0.1:8000/api/user/${email}`)
    .then(response => {
      const userId = response.data.id;
      setUserID(userId);
    })
    .catch(error => {
      console.error("There was an error fetching the user ID!", error);
    });
  
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that End time is after Start time
    if (endTime <= startTime) {
      alert("End time must be after Start time.");
      return;
    }

    // Format start and end times with the date
    const formattedStartTime = `${date.toISOString().split('T')[0]} ${startTime}:00`;
    const formattedEndTime = `${date.toISOString().split('T')[0]} ${endTime}:00`;

    const newEvent = {
      title,
      description,
      start_time: formattedStartTime,
      end_time: formattedEndTime,
      user_id: userID,
      category_id: categoryID,
    };

    axios.post('http://127.0.0.1:8000/api/events', newEvent)
  .then(response => {
    onSave(newEvent);
    onClose(); // Close the form after saving
  })
  .catch(error => {
    if (error.response) {
      console.error("Server responded with error:", error.response.data);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error in request setup:", error.message);
    }
  });

  };

  return (
    <div className="new-event-overlay">
      <div className="new-event-form">
        <h3>Add New Event</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label>Start time:</label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
          </div>
          <div>
            <label>End time:</label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </div>
          <div style={{ display: 'none' }}>
            <label>User_ID:</label>
            <input type="text" value={userID} readOnly />
          </div>
          <div>
            <label>Category_ID:</label>
            <select
              value={categoryID}
              onChange={(e) => setCategoryID(e.target.value)}
              required
            >
              <option value="" disabled>Select a category</option>
              <option value="1">Meeting</option>
              <option value="2">Training & Development</option>
              <option value="4">Product Launch</option>
              <option value="5">General</option>
            </select>
          </div>
          <div>
            <button type="submit" className="save-button">Save Event</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewEvent;*/

/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewEvent = ({ date, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [userId, setUserId] = useState(null);
  const [categoryId, setCategoryId] = useState(1); // Default value
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch user ID and event categories
    const fetchUserId = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          throw new Error('No authentication token found');
        }

        const response = await axios.get('http://127.0.0.1:8000/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setUserId(response.data.id);
      } catch (err) {
        console.error('Error fetching user ID:', err.response ? err.response.data : err.message);
        setError('Error fetching user ID.');
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/event-categories');
        setCategories(response.data);
      } catch (err) {
        console.error('Error fetching categories:', err.response ? err.response.data : err.message);
        setError('Error fetching categories.');
      }
    };

    fetchUserId();
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Format date and time
    const startTimeFormatted = `${date.toISOString().split('T')[0]} ${startTime}`;
    const endTimeFormatted = `${date.toISOString().split('T')[0]} ${endTime}`;

    const eventData = {
      title,
      description,
      start_time: startTimeFormatted,
      end_time: endTimeFormatted,
      user_id: userId,
      category_id: categoryId
    };

    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        throw new Error('No authentication token found');
      }

      await axios.post('http://127.0.0.1:8000/api/events', eventData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      onSave();
      onClose();
    } catch (err) {
      console.error('Error saving event:', err.response ? err.response.data : err.message);
      setError('There was an error saving the event!');
    }
  };

  return (
    <div className="new-event-overlay">
      <div className="new-event-form">
        <h3>Add New Event</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Event Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Event Description:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label>Start Time:</label>
            <input
              type="datetime-local"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
          </div>
          <div>
            <label>End Time:</label>
            <input
              type="datetime-local"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Category:</label>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(parseInt(e.target.value))}
              required
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button type="submit" className="save-button">Save Event</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default NewEvent;
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewEvent = ({  onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [userId, setUserId] = useState(null);
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    // Fetch categories for the dropdown
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/event-categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    // Fetch user ID
    const fetchUserId = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserId(response.data.id);
      } catch (error) {
        console.error('Error fetching user ID:', error);
        setError('Error fetching user ID.');
      }
    };

    fetchCategories();
    fetchUserId();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare event data
    const eventData = {
      title,
      description,
      start_time: startTime,
      end_time: endTime,
      user_id: userId,
      category_id: categoryId
    };

    try {
      await axios.post('http://127.0.0.1:8000/api/events', eventData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      onSave(); // Call onSave to update the parent component
      onClose(); // Close the form
    } catch (error) {
      console.error('Error saving the event:', error);
      setError('Error saving the event.');
    }
  };

  return (
    <div className="new-event-overlay">
      <div className="new-event-form">
        <h3>Add New Event</h3>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label>Start Time:</label>
            <input
              type="datetime-local"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
          </div>
          <div>
            <label>End Time:</label>
            <input
              type="datetime-local"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Category ID:</label>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="save-button">Save Event</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default NewEvent;

