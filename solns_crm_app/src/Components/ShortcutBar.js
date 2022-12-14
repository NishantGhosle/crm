// rafce to create component
import React from "react";
import "./shortcutBar.css";

const ShortcutBar = () => {
  let shortcut_Array = [
    "Create Contact",
    "create Account",
    "Create Lead",
    "Create Opportunities",
    "Create Case",
    "Create Task",
    "Report Bug",
    "Compose Email",
    "Schedule Meeting",
    "Schedule Call",
    "Goals",
    "Setting",
  ];
  return (
    <div className="shortcut-outer-div">
      <p className="p-shortcut">Shortcuts</p>
      <div>
        <ul class="list-group list-box">
          {shortcut_Array.map((value, index) => {
            return (
              <li class="list-group-item  list-item" aria-disabled="true" key={index}>
                 <button className="btn btn-shortcut ">{value}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ShortcutBar;
