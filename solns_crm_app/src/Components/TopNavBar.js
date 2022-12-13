import React from "react";
import "./topNavBar.css";
import { Container, Row, Col } from "react-bootstrap";

const TopNavBar = () => {
  return (
    <div>
      {/* <Container className="container">
        <Row className="row">
          <Col className="col-4">
            <Row className="row">
              <Col className="col-3">
                <div className="btn-div">
                  <button className="btn ">Home</button>
                </div>
              </Col>
              <Col className="col-3">
                <div className="btn-div">
                  <button className="btn ">Leads</button>
                </div>
              </Col>
              <Col className="col-3">
                <div className="btn-div">
                  <button className="btn ">Account</button>
                </div>
              </Col>

              <Col className="col-3">
                <div className="btn-div">
                  <button className="btn ">Opportunities</button>
                </div>
              </Col>
            </Row>
          </Col>

          <Col className="col-4">
            <Row className="row">
              <Col className="col-3">
                <div className="btn-div">
                  <button className="btn ">Cases</button>
                </div>
              </Col>
              <Col className="col-3">
                <div className="btn-div">
                  <button className="btn ">Contacts</button>
                </div>
              </Col>
              <Col className="col-3">
                <div className="btn-div">
                  <button className="btn ">Calender</button>
                </div>
              </Col>
              <Col className="col-3">
                <div className="btn-div">
                  <button className="btn ">Reports</button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="col-4">
            <Row className="row">
              <Col className="col-3">
                <div className="btn-div">
                  <button className="btn ">Email</button>
                </div>
              </Col>
              <Col className="col-3">
                <div className="btn-div">
                  <button className="btn ">Meetings</button>
                </div>
              </Col>
              <Col className="col-3">
                <div className="btn-div">
                  <button className="btn ">Calls</button>
                </div>
              </Col>
              <Col className="col-3">
                <div className="btn-div">
                  <button className="btn ">Tasks</button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container> */}

      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            Home
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            Leads
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            Accounts
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            Opportunities
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            Cases
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            Contact
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            Calendar
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            Reports
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
           Emails
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            Meetings
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            Contact
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            Tasks
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            Calls
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            Goals
          </button>
        </li>

        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            {'>>'}
          </button>
        </li>
       
      </ul>
      
    </div>
  );
};

export default TopNavBar;
