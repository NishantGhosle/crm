import React from "react";
import CommonPart from "../Commonpart/CommonPart";
import Features from "./Features";
import './lead.css';

import LeadMainBox from "./LeadMainBox";


const Lead = () => {
  return (
    <div>
      <CommonPart />
      {/* <div className="lead-outer-div"> */}
        <Features />
        <LeadMainBox />
      {/* </div> */}
    </div> 
  );
};

export default Lead;
