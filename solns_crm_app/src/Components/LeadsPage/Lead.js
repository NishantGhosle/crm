import React, { useEffect, useState, useContext} from "react";
import { json } from "react-router-dom";
import CommonPart from "../Commonpart/CommonPart";
import TopNavBar from '../homepage/TopNavBar';
import Features from "./Features";
import "./lead.css";

import LeadMainBox from "./LeadMainBox";
import { useLocation} from "react-router-dom";
import AuthContext from "../Context/AuthProvider";
import AdminLogin from "../Login/LoginPage";




const Lead = () => {

  const {user} = useContext(AuthContext);

  const location = useLocation();
  const type = location.state.type;
  const email = location.state.email;
  const userid = location.state.profile;
  console.log(userid);

  const [leadData, setLeadData] = useState([])
  const [searchResults, setSearchResults] = useState([])
  function getleadFunc(){
    fetch(`http://localhost:3030/getlead/byemail/${email}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setLeadData(json)
        setSearchResults(json)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getleadFunc();
    // setLeadData(json)
  },[])

  

  return (
    <>
    {user && ( <div>
      <div>
      <CommonPart />
      <TopNavBar  email_id={email} type={type}  profile={userid}/>
      </div>
      {/* <div className="lead-outer-div"> */}
      
      <Features updateleadList={getleadFunc} setSearchResults={setSearchResults} leadArray={leadData} leadmakeremail={email} profile={userid}/>
      <LeadMainBox updateleadList={getleadFunc} leadArray={searchResults} email_id={email} type={type} profile={userid} />
      {/* </div> */}
    </div>)}
    {!user && (<AdminLogin />)}
    </>
   
  );
};

export default Lead;
