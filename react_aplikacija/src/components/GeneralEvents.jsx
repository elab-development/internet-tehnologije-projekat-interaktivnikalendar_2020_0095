import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GeneralEvents = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGeneralEvents = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/events/by-category', {
          category: 5 // 'General' category ID
        });
        if (response.data && Array.isArray(response.data.data)) {
          setEvents(response.data.data);
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (err) {
        console.error('Error fetching general events:', err);
        setError('Failed to fetch general events.');
      }
    };

    fetchGeneralEvents();
  }, []);

  return (
    <div className="general-events">
      <h2 className="generalEventsTitle">General Events</h2>
      {error && <p>{error}</p>}
      {events.length === 0 ? (
        <p>No general events to display.</p>
      ) : (
        <ul className="events-list">
          {events.map((event) => (
            <li key={event.id} className="event-item">
              <div className="event-details">
                <span className="event-date">{new Date(event.start_time).toDateString()}</span>
                <span className="event-title">{event.title}</span>
                <span className="event-description">{event.description}</span>
                <span className="event-time">{new Date(event.start_time).toLocaleTimeString()}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GeneralEvents;
