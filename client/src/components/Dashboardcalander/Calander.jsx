import React, { useState } from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import { ArrowRight, ArrowLeft,  }  from "lucide-react";
import './Dashboardcalander.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={prevMonth} id="calanderarrow"><ArrowLeft size={10} color="white" /></button>
        <h2>{format(currentDate, 'MMMM ')}</h2>
        <h2>{format( currentDate,'yyyy')}</h2>
        <button onClick={nextMonth} id="calanderright"><ArrowRight size={10} color="white" /></button>
      </div>
      
    </div>
  );
};

export default Calendar;
