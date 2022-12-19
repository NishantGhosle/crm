import React, { useEffect, useState } from "react";
import "./topNavBar.css";
import { useNavigate } from "react-router-dom";

const TopNavBar = () => {
  // let [val, setval] = useState("Home");
  // let [id, setid] = useState(0);
  const navigate = useNavigate();
  function clickhandle(val, id) {
    console.log(val, id);

    if (val == "Home") {
      navigate("/");
    } else if (val === "Leads") {
      navigate("/leads");
    } else if (val === "Accounts") {
      navigate("/account");
    } else if (val === "Opportunities") {
      navigate("/opportunities");
    } else if (val === "Cases") {
      navigate("/case");
    } else if (val === "Contact") {
      navigate("/contacts");
    } else if (val === "Calendar") {
      navigate("/calendars");
    } else if (val === "Reports") {
      navigate("/reports");
    } else if (val === "Emails") {
      navigate("/emails");
    } else if (val === "Meeting") {
      navigate("/meeting");
    } else if (val === "Calls") {
      navigate("/calls");
    } else if (val === "Goals") {
      navigate("/goals");
    } else if (val === "Tasks") {
      navigate("/task");
    } else {
      navigate("/");
    }
  }

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
        className="nav nav-tabs nav-pills nav-justified"
        id="myTab"
        role="tablist"
      >
        {navbar_array.map((value, index) => {
          return (
            <li className="nav-item" role="presentation" key={index}>
              <button
                className="btn  btn-outline-secondary me-2"
                type="button"
                id={index}
                onClick={() => clickhandle(value, index)}
              >
                {value}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopNavBar;
