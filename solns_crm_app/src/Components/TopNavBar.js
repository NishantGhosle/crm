import React from "react";
import "./topNavBar.css";

const TopNavBar = () => {
  let navbar_array = [
    "Home",
    "Leads",
    "Accounts",
    "Opportunities",
    "Cases",
    "Contact",
    "Calendar",
    "Reports",
    "Emails",
    "Meeting",
    "Calls",
    "Goals",
    "Tasks",
  ];
  return (
    <div>
      <ul
        class="nav nav-tabs nav-pills nav-justified"
        id="myTab"
        role="tablist"
      >
        {navbar_array.map((value, index) => {
          return (
            <li class="nav-item" role="presentation" key={index}>
              <button className="btn ">{value}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopNavBar;
