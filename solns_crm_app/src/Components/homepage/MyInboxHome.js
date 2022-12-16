import React from "react";
import "./myInboxHome.css";
import Calendar from 'react-calendar';

const MyInboxHome = () => {
  return (
    <div className="container text-center">
      <div className="row g-2">
        <div className="col-6">
          <div className="p-3 border bg-light">
            <p className="myInbox-p">MyInbox: UNREAD EMAILS</p>
            <div className="myInbox-btn-div">
              <button>Create</button>
              <p>
                <span>30</span> Results
              </p>
            </div>
            <table className="table">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Subject</th>
                  <th>contact</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Review Needs</td>
                  <td>Tom helen</td>
                  <td>3 days ago</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Review Needs</td>
                  <td>Tom helen</td>
                  <td>3 days ago</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Review Needs</td>
                  <td>Tom helen</td>
                  <td>3 days ago</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Review Needs</td>
                  <td>Tom helen</td>
                  <td>3 days ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-6">
          <div className="p-3 border bg-light">Custom column paddinghiii</div>
        </div>
        <div className="col-6">
          <div className="p-3 border bg-light"><Calendar /></div>
        </div>
        <div className="col-6">
          <div className="p-3 border bg-light">Custom column padding</div>
        </div>
      </div>
    </div>
  );
};

export default MyInboxHome;
