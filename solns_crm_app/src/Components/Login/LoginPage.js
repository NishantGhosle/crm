import React, {useState, useContext } from "react";
import axios from "axios";
import "./loginpage.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthProvider";
import Dashboard from "../DashBoard/Dashboard";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState({});
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  // const [dashboard, setdashboard] = useState("");
  let navigate = useNavigate();

  const { setAuth } = useContext(AuthContext);
  const {user} = useContext(AuthContext);
  let url;

  async function checkAndNevigateFunc(val) {
    await axios(val)
      .then((response) => {
        if (response.status === 200) {
          setMessage("loged in successfully...");
          console.log("loggedin successfullyyy!!!");
          console.log(response.data[0]);
        
          localStorage.setItem('user', JSON.stringify({
            id:response.data[0]._id,
            email:response.data[0].email,
            type:response.data[0].type,
            name:response.data[0].name,
          }));
          setAuth({type:'LOGIN', payload: {
            id:response.data[0]._id,
            email:response.data[0].email,
            type:response.data[0].type,
            name:response.data[0].name,
          }});

        }
      })
      .catch((error) => {
        console.log(error.message); 
        setMessage(error.message);
        // if (error.response === 404) {
        //   navigate("/");
        // }
      });

   
  }

  const handlelogin = (e) => {
    e.preventDefault();
   
 

    if (type === "admin") {
      url = `http://localhost:3030/admin/login/${email}/${password}`;
    
    } else if (type === "user") {
      url = `http://localhost:3030/user/login/${email}/${password}`;
  
    }
    console.log(url);

    checkAndNevigateFunc(url);
    // console.log(obj)
    // profile_obj = profile;
    // setTimeout(
    //   () => {
    //     console.log(email);


       
    //     localStorage.setItem('user', JSON.stringify(obj));
    //     setAuth({type:'LOGIN', payload: obj});
    //     // navigate(`/${dashboard}`, {
    //     //   state: {
    //     //     email: `${email}`,
    //     //   },
    //     // });
    //   },
    //   1000,
    //   []
    // );
  };

  return (
    <>
    {user && (<Dashboard />)}
    {!user && (<form onSubmit={handlelogin}>
        <div className="box outerboxlogin">
          <div className="container">
            <div className="top">
              <span>Have an account?</span>
              <header>Login</header>
            </div>
            <div className="input-field">
              <select
                style={{
                  width: "100%",
                  height: "45px",
                  backgroundColor: " rgba(255,255,255,0.1)",
                  color: "white",
                  borderRadius: " 30px",
                  padding: "0 0 0 45px",
                }}
                onChange={(e) => setType(e.target.value)}
              >
                <option style={{ color: "black" }}>Select type</option>
                <option style={{ color: "black" }} value="admin">
                  Admin
                </option>
                <option style={{ color: "black" }} value="user">
                  User
                </option>
              </select>
            </div>
            <div className="input-field">
              <input
                type="text"
                className="input"
                placeholder="Username"
                id=""
                onChange={(e) => setEmail(e.target.value)}
              />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-field">
              <input
                type="Password"
                className="input"
                placeholder="Password"
                id=""
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="bx bx-lock-alt"></i>
            </div>
            <div className="input-field">
              <button type="submit" className="submit" id="">
                Login
              </button>
            </div>
            <div style={{ color: "white" }}>{message}</div>
          </div>
        </div>
      </form>)}
   
    
      
    </>
  );
};

export default AdminLogin;
