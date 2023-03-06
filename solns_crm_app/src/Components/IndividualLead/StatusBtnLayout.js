import React from "react";
import "./statusBtnLayout.css";

const StatusBtnLayout = ({ statusVal }) => {
  return (
    <div>
      {/* <div>{statusVal}</div>
        <div className='statusLayout'>
            <div className='statusBtn'>new</div>
            <div className='horizontalLine'></div>
            <div className='statusBtn'>contacted</div>
            <div className='horizontalLine'></div>
            <div className='statusBtn'>working</div>
            <div className='horizontalLine'></div>
            <div className='statusBtn'>completed</div>
        </div> */}

      {statusVal === "new" ? (
         <div className='statusLayout'>
         <div className='statusBtn'  style={{backgroundColor: '#B6E2A1'}}>new</div>
         <div className='horizontalLine' style={{backgroundColor:'grey'}}></div>
         <div className='statusBtn'  style={{backgroundColor: '#EEEEEE'}}>contacted</div>
         <div className='horizontalLine'  style={{backgroundColor:'grey'}}></div>
         <div className='statusBtn'  style={{backgroundColor: '#EEEEEE'}}>working</div>
         <div className='horizontalLine'  style={{backgroundColor:'grey'}}></div>
         <div className='statusBtn'  style={{backgroundColor: '#EEEEEE'}}>completed</div>
     </div>
      ) : statusVal === "contacted" ? (
        <div className='statusLayout'>
         <div className='statusBtn'  style={{backgroundColor: '#B6E2A1'}}>new</div>
         <div className='horizontalLine' style={{backgroundColor:'#5FD068'}}></div>
         <div className='statusBtn'  style={{backgroundColor: '#B6E2A1'}}>contacted</div>
         <div className='horizontalLine'  style={{backgroundColor:'grey'}}></div>
         <div className='statusBtn'  style={{backgroundColor: '#EEEEEE'}}>working</div>
         <div className='horizontalLine'  style={{backgroundColor:'grey'}}></div>
         <div className='statusBtn'  style={{backgroundColor: '#EEEEEE'}}>completed</div>
     </div>
      ) : statusVal === "working" ? (
        <div className='statusLayout'>
        <div className='statusBtn'  style={{backgroundColor: '#B6E2A1'}}>new</div>
        <div className='horizontalLine' style={{backgroundColor:'#5FD068'}}></div>
        <div className='statusBtn'  style={{backgroundColor: '#B6E2A1'}}>contacted</div>
        <div className='horizontalLine'  style={{backgroundColor:'#5FD068'}}></div>
        <div className='statusBtn'  style={{backgroundColor: '#B6E2A1'}}>working</div>
        <div className='horizontalLine'  style={{backgroundColor:'grey'}}></div>
        <div className='statusBtn'  style={{backgroundColor: '#EEEEEE'}}>completed</div>
    </div>
      ) : (
        <div className='statusLayout'>
        <div className='statusBtn'  style={{backgroundColor: '#B6E2A1'}}>new</div>
        <div className='horizontalLine' style={{backgroundColor:'#5FD068'}}></div>
        <div className='statusBtn'  style={{backgroundColor: '#B6E2A1'}}>contacted</div>
        <div className='horizontalLine'  style={{backgroundColor:'#5FD068'}}></div>
        <div className='statusBtn'  style={{backgroundColor: '#B6E2A1'}}>working</div>
        <div className='horizontalLine'  style={{backgroundColor:'#5FD068'}}></div>
        <div className='statusBtn'  style={{backgroundColor: '#B6E2A1'}}>completed</div>
    </div>
      )}
    </div>
  );
};

export default StatusBtnLayout;
