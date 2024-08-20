import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import NewEvent from './NewEvent'; 
import { useNavigate } from 'react-router-dom';


const useClickTimeout = (delay) => {
  const [clickTimeout, setClickTimeout] = useState(null);

  const handleClick = (callback) => {
    if (clickTimeout) {
      clearTimeout(clickTimeout);
      setClickTimeout(null);
      callback();
    } else {
      const timeoutId = setTimeout(() => {
        setClickTimeout(null);
      }, delay);
      setClickTimeout(timeoutId);
    }
  };

  return handleClick;
};

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [isFormOpen, setIsFormOpen] = useState(false); 
  const [selectedDate, setSelectedDate] = useState(null); 
  const [events, setEvents] = useState([]); 

  const navigate = useNavigate();
  const handleClickTimeout = useClickTimeout(300); // Set delay for double-click

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleDayClick = (value) => {
    handleClickTimeout(() => handleDayDoubleClick(value));
  };

  const handleDayDoubleClick = (value) => {
    setSelectedDate(value);
    setIsFormOpen(true);
  };

  const handleSaveEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]); 
    setIsFormOpen(false);
    setSelectedDate(null);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setSelectedDate(null);
  };

  const goToAllEvents = () => {
    navigate('/all-events', { state: { events } });
  };

  const tileContent = ({ date }) => {
    const dayEvents = events.filter(event => event.date.toDateString() === date.toDateString());
    return dayEvents.length > 0 ? (
      <div className="event-titles">
        {dayEvents.slice(0, 2).map((event, index) => (
          <div key={index} className="event-title" style={{ fontSize: 'small', backgroundColor:' #e0f7fa' }}>
            {event.title}
          </div>
        ))}
        {dayEvents.length > 2 && (
          <div className="more-events" style={{ fontSize: 'small' }}>
            +{dayEvents.length - 2} more
          </div>
        )}
      </div>
    ) : null;
  };

  return (
    <div className='mycalendar'>
      <h2 className='calendar-title'>My Calendar</h2>
      <div className="calendar-container">
        {!isFormOpen && (
          <>
            <Calendar
              onChange={handleDateChange}
              value={date}
              onClickDay={handleDayClick}
              tileContent={tileContent} 
            />
            <button
              onClick={goToAllEvents}
              className="all-events-button"
            >
              All Events
            </button>
          </>
        )}
      </div>

      {isFormOpen && (
        <NewEvent date={selectedDate} onClose={closeForm} onSave={handleSaveEvent} />
      )}
    </div>
  );
};

export default MyCalendar;
