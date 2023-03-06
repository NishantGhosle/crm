import React, { useEffect, useState } from "react";
import CasesTable from "./CasesTable";
import "./caselead.css";

const CasesLead = ({ leadArray }) => {
  return (
    <div>
      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>firstName</th>
            <th>lastname</th>
            <th>Product</th>
            <th>Documents</th>
          </tr>
        </thead>
        <tbody>
          {leadArray.map((value, index) => {
            return (
              <CasesTable
                num={index + 1}
                index={index}
                key={index}
                id={value._id}
                firstname={value.firstname}
                lastname={value.lastname}
                productS={value.product}
                itr={value.itrfile}
                pan={value.panfile}
                aadhaar={value.aadhaarfile}
                residentialproof={value.residentialproof}
                bankstatement={value.bankstatement}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CasesLead;
