import { useState, useContext } from "react";
import Attendance from "./Attendance";
import Results from "./Results";
import Timetable from "./Timetable";
import Profile from "./Profile";
import Leave from "./Leave";
import FeePayment from "./FeePayment";
import { ThemeContext } from "../context/ThemeContext";

function Dashboard({ onLogout }) {

  const [activeTab, setActiveTab] = useState("attendance");
  const [showNotifications, setShowNotifications] = useState(false);
const { darkMode, setDarkMode } =
  useContext(ThemeContext);

  return (
    <div className={darkMode ? "dashboard-page dark-mode" : "dashboard-page"}>
      <div className="navbar-att">

        <div className="logo-section">
          <h2>KLH Student Portal</h2>
        </div>

        <div className="nav-links">

          <a
            className={activeTab === "attendance" ? "active" : ""}
            onClick={() => setActiveTab("attendance")}
          >
            Attendance
          </a>

          <a
            className={activeTab === "results" ? "active" : ""}
            onClick={() => setActiveTab("results")}
          >
            Results
          </a>

          <a
            className={activeTab === "timetable" ? "active" : ""}
            onClick={() => setActiveTab("timetable")}
          >
            Timetable
          </a>

          <a
            className={activeTab === "profile" ? "active" : ""}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </a>
          <a
  className={activeTab === "leave" ? "active" : ""}
  onClick={() => setActiveTab("leave")}
>
  Leave
</a>
<a
  className={activeTab === "fee" ? "active" : ""}
  onClick={() => setActiveTab("fee")}
>
  Fee Payment
</a>

        </div>

       <div className="user-section">

  <button
    className="theme-toggle"
    onClick={() => setDarkMode(!darkMode)}
  >
    {darkMode ? "☀️ Light" : "🌙 Dark"}
  </button>

  <div className="notification-icon"></div>

  <div
    className="notification-icon"
    onClick={() =>
      setShowNotifications(!showNotifications)
    }
  >
    🔔
    <span className="notification-badge">3</span>
  </div>

  {showNotifications && (
    <div className="notification-panel">

      <h4>Notifications</h4>

      <p>📚 New AI Assignment Uploaded</p>

      <p>⚠ Attendance Warning: Japanese below 75%</p>

      <p>📝 Mathematics for Data Science Exam on Monday</p>

    </div>
  )}

  <div>
    <h4>HASINI</h4>
    <p>B.Tech - CSE</p>
  </div>

  <button onClick={onLogout}>
    Logout
  </button>

</div>
      </div>

      <div className="content">

        {activeTab === "attendance" && <Attendance />}

        {activeTab === "results" && <Results />}

        {activeTab === "timetable" && <Timetable />}

        {activeTab === "profile" && <Profile />}
        {activeTab === "leave" && <Leave />}
        {activeTab === "fee" && <FeePayment />}

      </div>
    </div>
  );
}

export default Dashboard;