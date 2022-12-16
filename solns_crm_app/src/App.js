import "./App.css";
import Home from "./Components/homepage/Home";
import Lead from "./Components/LeadsPage/Lead";
import { Route,Routes } from "react-router-dom";
import Account from "./Components/Accountspage/Account";
import Calendars from "./Components/Calendarpage/Calendars";
import Calls from "./Components/Callspage/Calls";
import Case from "./Components/Casespage/Case";
import Contact from "./Components/Contactpage/Contact";
import Emails from "./Components/EmailsPage/Emails";
import Goals from "./Components/Goalspage/Goals"
import Meetings from "./Components/Meetingpage/Meetings";
import Opportunities from "./Components/Opportunitiespage/Opportunities";
import Reports from "./Components/Reportspage/Reports";
import Task from "./Components/taskpage/Task";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/Leads" element={<Lead />} />
        <Route path="/account" element={<Account />} />
        <Route path="/calendars" element={<Calendars />} />
        <Route path="/calls" element={<Calls />} />
        <Route path="/case" element={<Case />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/emails" element={<Emails />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/meeting" element={<Meetings />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </div>
  );
}

export default App;
