import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Stilovi za kalendar

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className='mycalendar'>
      
      <h2 className='calendar-title'>My Calendar</h2>
    <div className="calendar-container">
      
      <Calendar
        onChange={handleDateChange}
        value={date}
      />
    </div>
    </div>
  );
};

export default MyCalendar;