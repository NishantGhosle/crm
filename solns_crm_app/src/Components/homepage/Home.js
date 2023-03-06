import React,{useContext}from "react";
import CommonPart from "../Commonpart/CommonPart";
import { useLocation} from "react-router-dom";
import "./home.css";
import MyInboxHome from "./MyInboxHome";
import ShortcutBar from "./ShortcutBar";
import TopNavBar from '../homepage/TopNavBar';
import AuthContext from "../Context/AuthProvider";
import AdminLogin from "../Login/LoginPage";


const Home = ({email,type,profile}) => {
  const {user} = useContext(AuthContext);
 

  return (
    <>
    {user && ( <div>
      <CommonPart />
      <TopNavBar  email_id={email} type={type} profile={profile}/>
      {/* <div className="home-outer-div"> */}
        
        <MyInboxHome email_id={email} type={type} profile={profile}/>
      {/* </div> */}
    </div>)}
    {!user && (<AdminLogin />)}
    </>
   
  );
};

export default Home;
