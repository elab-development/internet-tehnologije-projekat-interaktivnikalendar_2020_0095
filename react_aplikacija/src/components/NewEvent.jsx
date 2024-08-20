import React, { useState } from 'react';

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

export default NewEvent;

