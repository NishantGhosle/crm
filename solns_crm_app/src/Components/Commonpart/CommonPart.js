import React ,{useContext} from "react";
import { useNavigate } from "react-router-dom";
import './commonpart.css';
import AuthContext from "../Context/AuthProvider";
import AdminLogin from "../Login/LoginPage";
import TopNavBar from "../homepage/TopNavBar";



const CommonPart = () => {

  const navigate = useNavigate();

  const {user} = useContext(AuthContext);
  const {setAuth} = useContext(AuthContext);

  function handleLogout(){
    localStorage.removeItem('user')
    setAuth({type:'LOGOUT' })
    // navigate('/');
    
  }
  
  return (
    <>
    {user && (<div>
      <header className="App-header">
       <h1>SolnsCRM</h1>      
       <button className="btn profile-box" onClick={handleLogout}>Logout</button>
      </header>
     
    </div>)}
    {!user && (<AdminLogin />)}
    </>
    
    
  );
};

export default CommonPart;
