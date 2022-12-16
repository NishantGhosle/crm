import React from "react";
import './commonpart.css';
import TopNavBar from "../homepage/TopNavBar";

const CommonPart = () => {
  return (
    <div>
      <header className="App-header">
        <h1>SolnsCRM</h1>
        <p className="profile-box">P</p>
      </header>
      <TopNavBar />
    </div>
  );
};

export default CommonPart;
