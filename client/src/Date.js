
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Date = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div>
      <h2>Select a Date</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM/dd/yyyy"
      />
      <h2>Select a Month</h2>
      <select value={selectedMonth} onChange={handleMonthChange}>
        <option value="">Select a Month</option>
        <option value="January">January</option>
        <option value="February">February</option>
        
      </select>
    </div>
  )
};

export default Date;

  
