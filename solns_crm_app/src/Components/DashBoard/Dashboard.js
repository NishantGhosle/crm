import React, { useContext } from "react";
import AuthContext from "../Context/AuthProvider";
import AdminLogin from "../Login/LoginPage";
import Home from "../homepage/Home";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user && (
        <div>
          <Home email={user.email} type={user.type} profile={user.id} />
        </div>
      )}
      {!user && <AdminLogin />}
    </>
  );
};

export default Dashboard;
