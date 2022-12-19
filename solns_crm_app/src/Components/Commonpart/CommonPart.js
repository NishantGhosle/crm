import React from "react";
import './commonpart.css';
import TopNavBar from "../homepage/TopNavBar";
import { FaSistrix } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const CommonPart = () => {
  return (
    <div>
      <header className="App-header">
        <h1>SolnsCRM</h1>
        <form className="d-flex search_form" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-secondary btn-search" type="submit"><FaSistrix /></button>
      </form>
        <p className="profile-box">P</p>
      </header>
      <TopNavBar />
    </div>
  );
};

export default CommonPart;
