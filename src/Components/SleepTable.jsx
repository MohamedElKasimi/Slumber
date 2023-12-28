import React from "react";

const subtractHoursAndMinutes = (timeString, factor) => {
    const timeParts = timeString.split(':');
    let hours = parseInt(timeParts[0]);
    let minutes = parseInt(timeParts[1]);
    let timeExtension = "AM";
  
    // Convert the time to total minutes
    let totalMinutes = hours * 60 + minutes;
  
    // Subtract the factor of 1 hour and 30 minutes
    totalMinutes -= factor * 90;
  
    // Handle negative total minutes
    if (totalMinutes < 0) {
      totalMinutes += 24 * 60; // Wrap around to the previous day
    }
  
    // Calculate hours and minutes
    hours = Math.floor(totalMinutes / 60);
    minutes = totalMinutes % 60;
  
    // Determine AM or PM
    if (hours >= 12) {
      if (hours !== 12) {
        hours -= 12;
      }
      timeExtension = "PM";
    }
  
    // Format the result as a string
    const newTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${timeExtension}`;
    return newTime;
  };
  
  

const SleepTable = ({timeInput}) =>{

    const time = timeInput;

    return(
        <div className="time-box">
            <h1 className="modal-header">You can sleep at...</h1>
            <div className="optimal">{subtractHoursAndMinutes(time, 6)}</div>
            <div className="optimal">{subtractHoursAndMinutes(time, 5)}</div>
            <h1 className="modal-header">Or if you're in a hurry</h1>
            <div className="sub-optimal">{subtractHoursAndMinutes(time, 4)}</div>
            <div className="sub-optimal">{subtractHoursAndMinutes(time, 3)}</div>
            <div className="sub-optimal">{subtractHoursAndMinutes(time, 2)}</div>
            <div className="sub-optimal">{subtractHoursAndMinutes(time, 1)}</div>

            <p className="summary">Sleep cycles consist of stages: light (Stages 1 and 2), deep (Stage 3), and REM. They repeat, lasting 90-120 minutes. Wake up at cycle end for refreshment; interrupting deep or REM sleep causes grogginess.</p>
        </div>
    );

}

export default SleepTable;