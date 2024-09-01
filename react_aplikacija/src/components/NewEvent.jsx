/*import React, { useState, useEffect } from 'react';
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

export default NewEvent;*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewEvent = ({ date, onClose, onSave }) => {
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

    // Adjust the date by adding one day
    const adjustedDate = new Date(date);
    adjustedDate.setDate(adjustedDate.getDate() + 1);
    const formattedDate = adjustedDate.toISOString().split('T')[0];
    setStartTime(`${formattedDate}T09:00`); // Default start time
    setEndTime(`${formattedDate}T17:00`);   // Default end time
  }, [date, token]);

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

  // Helper function to extract time part from datetime
  const getTimeFromDateTime = (dateTime) => {
    return dateTime.split('T')[1] || '';
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
              type="time"
              value={getTimeFromDateTime(startTime)}
              onChange={(e) => setStartTime(`${date.toISOString().split('T')[0]}T${e.target.value}`)}
              required
            />
          </div>
          <div>
            <label>End Time:</label>
            <input
              type="time"
              value={getTimeFromDateTime(endTime)}
              onChange={(e) => setEndTime(`${date.toISOString().split('T')[0]}T${e.target.value}`)}
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




