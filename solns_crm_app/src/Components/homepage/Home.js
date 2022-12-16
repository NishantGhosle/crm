import React from "react";
import CommonPart from "../Commonpart/CommonPart";
import "./home.css";
import MyInboxHome from "./MyInboxHome";
import ShortcutBar from "./ShortcutBar";


const Home = () => {
  return (
    <div>
      <CommonPart />
      <div className="home-outer-div">
        <ShortcutBar />
        <MyInboxHome />
      </div>
    </div>
  );
};

export default Home;
