/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch the user profile to get the email
        const profileResponse = await axios.get('http://localhost:8000/api/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });

        const email = profileResponse.data.email;
        if (!email) {
          throw new Error('No email found in profile response');
        }

        // Fetch events by email
        const eventsResponse = await axios.post('http://localhost:8000/api/events/by-email', { email }, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });

        // Check the response format
        console.log('Events Response:', eventsResponse.data);

        // Check if the response contains the 'data' property and is an array
        if (eventsResponse.data && Array.isArray(eventsResponse.data.data)) {
          // Sort events by start time from earliest to latest
          const sortedEvents = eventsResponse.data.data.sort((a, b) => new Date(a.start_time) - new Date(b.start_time));
          setEvents(sortedEvents);
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to fetch events.');
      }
    };

    fetchEvents();
  }, []);

  const handleDeleteEvent = async (indexToDelete) => {
    const eventId = events[indexToDelete].id;

    try {
      await axios.delete(`http://localhost:8000/api/events/${eventId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setEvents(prevEvents => prevEvents.filter((_, index) => index !== indexToDelete));
    } catch (err) {
      console.error('Error deleting event:', err);
    }
  };

  return (
    <div className="all-events">
      <h2 className="allEventsTitle">All Events</h2>
      {error && <p>{error}</p>}
      {events.length === 0 ? (
        <p>No events to display.</p>
      ) : (
        <ul className="events-list">
          {events.map((event, index) => (
            <li key={event.id} className="event-item">
              <div className="event-details">
                <span className="event-date">{new Date(event.start_time).toDateString()}</span>
                <span className="event-title">{event.title}</span>
                <span className="event-description">{event.description}</span>
                <span className="event-time">{new Date(event.start_time).toLocaleTimeString()}</span>
              </div>
              <input
                type="checkbox"
                onChange={() => handleDeleteEvent(index)}
                className="event-checkbox"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllEvents;
*/


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch the user profile to get the email
        const profileResponse = await axios.get('http://localhost:8000/api/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });

        const email = profileResponse.data.email;
        if (!email) {
          throw new Error('No email found in profile response');
        }

        // Fetch events by email
        const eventsResponse = await axios.post('http://localhost:8000/api/events/by-email', { email }, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });

        // Check the response format
        console.log('Events Response:', eventsResponse.data);

        // Check if the response contains the 'data' property and is an array
        if (eventsResponse.data && Array.isArray(eventsResponse.data.data)) {
          // Sort events by start time from earliest to latest
          const sortedEvents = eventsResponse.data.data.sort((a, b) => new Date(a.start_time) - new Date(b.start_time));
          setEvents(sortedEvents);
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to fetch events.');
      }
    };

    fetchEvents();
  }, []);

  const handleDeleteEvent = async (indexToDelete) => {
    const eventId = events[indexToDelete].id;

    try {
      await axios.delete(`http://localhost:8000/api/events/${eventId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setEvents(prevEvents => prevEvents.filter((_, index) => index !== indexToDelete));
    } catch (err) {
      console.error('Error deleting event:', err);
    }
  };

  return (
    <div className="all-events">
      <h2 className="allEventsTitle">All Events</h2>
      {error && <p>{error}</p>}
      {events.length === 0 ? (
        <p>No events to display.</p>
      ) : (
        <ul className="events-list">
          {events.map((event, index) => (
            <li key={event.id} className="event-item">
              <div className="event-details">
                <span className="event-date">{new Date(event.start_time).toDateString()}</span>
                <span className="event-title">{event.title}</span>
                <span className="event-description">{event.description}</span>
                <span className="event-time">{new Date(event.start_time).toLocaleTimeString()}</span>
              </div>
              <input
                type="checkbox"
                onChange={() => handleDeleteEvent(index)}
                className="event-checkbox"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllEvents;
