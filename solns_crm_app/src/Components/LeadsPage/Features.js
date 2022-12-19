import React, { useState } from "react";
import "./features.css";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const Features = () => {
  const [modal, setmodal] = useState(false);
  function clickhandler(val) {
    if (val === "New Lead") {
      setmodal(true);
    }
  }

  let lead_Array = [
    "Edit Lead",
    "New Lead",
    "Import Lead",
    "Setting",
    "Change Owner",
  ];
  return (
    <div className="features-outer-div">
      <ul className=" nav  list-box">
        {lead_Array.map((value, index) => {
          return (
            <li
              className="list-group-item  list-item"
              aria-disabled="true"
              key={index}
            >
              <button
                className="btn btn-lead"
                onClick={() => clickhandler(value)}
              >
                {value}
              </button>
            </li>
          );
        })}
      </ul>
      <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)}>
        <ModalHeader toggle={() => setmodal(!modal)}>New Lead</ModalHeader>
        <ModalBody>
          <form>
            <div class="mb-3">
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" name="firstName" placeholder="Jane" />
            </div>
            <div class="mb-3">
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" name="lastName" placeholder="Doe" />
            </div>

            <div class="mb-3">
            <label htmlFor="email">Email</label>
              
              <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
            </div>

            
            <label for="exampleFormControlInput1" class="form-label">
              discribtion
            </label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

            <button type="submit">Submit</button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Features;
