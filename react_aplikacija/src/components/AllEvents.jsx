import React from 'react';
import { useLocation } from 'react-router-dom';

const AllEvents = () => {
  const location = useLocation();
  const { events } = location.state || { events: [] }; 

  return (
    <div>
      <h2>All Events</h2>
      {events.length === 0 ? (
        <p>No events to display.</p>
      ) : (
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              {event.date.toDateString()}: {event.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllEvents;
