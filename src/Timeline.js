import React from 'react';
import './Timeline.css';
import Status from './Status'




function Timeline() {
  return (
    <div className="timeline">



      <Status status = "user-info" />
      <Status />
      <Status />


    </div>

    
  );
}

export default Timeline;
