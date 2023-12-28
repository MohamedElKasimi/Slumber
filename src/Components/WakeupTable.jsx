import React from "react";

const addHoursAndMinutes = (timeString, factor) => {
    const timeParts = timeString.split(':');
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);
    let timeExtension;
  
    const totalMinutesToAdd = (factor * 90) + (hours * 60) + minutes;
  
    let newHours = Math.floor(totalMinutesToAdd / 60) % 24;
    let newMinutes = totalMinutesToAdd % 60;

    if(newHours > 11.5){
        if(newHours==12){
        }
        else
        newHours = newHours - 12;

        timeExtension = "PM";
    }
    else
        timeExtension ="AM";
    
  
    const newTime = `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')} ${timeExtension}`;
    return newTime;
  };

const WakeupTable = ({timeInput}) =>{

    const time = timeInput;

    return(
        <div className="time-box">
            <h1 className="modal-header">You can wake up at...</h1>
            <div className="optimal">{addHoursAndMinutes(time, 5)}</div>
            <div className="optimal">{addHoursAndMinutes(time, 6)}</div>
            <h1 className="modal-header">Or if you're napping</h1>
            <div className="sub-optimal">{addHoursAndMinutes(time, 1)}</div>
            <div className="sub-optimal">{addHoursAndMinutes(time, 2)}</div>
            <div className="sub-optimal">{addHoursAndMinutes(time, 3)}</div>
            <div className="sub-optimal">{addHoursAndMinutes(time, 4)}</div>

            <p className="summary">Sleep cycles consist of stages: light (Stages 1 and 2), deep (Stage 3), and REM. They repeat, lasting 90-120 minutes. Wake up at cycle end for refreshment; interrupting deep or REM sleep causes grogginess.</p>
        </div>
    );

}

export default WakeupTable;