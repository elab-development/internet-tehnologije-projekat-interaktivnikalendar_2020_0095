import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const AllEvents = () => {
  const location = useLocation();
  const [events, setEvents] = useState(location.state?.events || []); 

  const handleDeleteEvent = (indexToDelete) => {
    const updatedEvents = events.filter((_, index) => index !== indexToDelete);
    setEvents(updatedEvents);
  };

  return (
    <div className="all-events">
      <h2 className="allEventsTitle">All Events</h2>
      {events.length === 0 ? (
        <p>No events to display.</p>
      ) : (
        <ul className="events-list">
          {events.map((event, index) => (
            <li key={index} className="event-item">
              <div className="event-details">
                <span className="event-date">{event.date.toDateString()}</span>
                <span className="event-title">{event.title}</span>
                <span className="event-description">{event.description}</span>
                <span className="event-time">{event.time}</span>
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

