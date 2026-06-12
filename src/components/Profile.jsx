import { useState, useEffect } from "react";

function Profile() {
  const [studentData, setStudentData] = useState(null);
  const [error, setError] = useState("");

 useEffect(() => {
  setTimeout(() => {

    const success = true;

    if (success) {
      setStudentData({
        name: "Hasini",
        rollNumber: "2510030098",
      });
    } else {
      setError("Failed to load student data");
    }

  }, 2000);
}, []);

 if (error) {
  return <h2>{error}</h2>;
}

if (!studentData) {
  return <h2>Loading Student Data...</h2>;
}
  return (
    <>
      <h1>Student Profile</h1>

      <p>Personal & Academic Information</p>

      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-avatar">H</div>

          <h2>Hasini</h2>

          <p>B.Tech · CSE · Sem III</p>

          <hr />

          <div className="status-box">
            <p>Enrollment Status</p>
            <h3>✔ Active</h3>
          </div>

          <button className="edit-btn">
            Edit Profile
          </button>
        </div>

        <div className="details-card">
          <h2>Personal & Academic Details</h2>

          <div className="details-grid">
            <div className="detail-item">
              <span>FULL NAME</span>
              <h3>Hasini</h3>
            </div>

            <div className="detail-item">
              <span>ROLL NUMBER</span>
              <h3>2510030098</h3>
            </div>

            <div className="detail-item">
              <span>DATE OF BIRTH</span>
              <h3>16 April 2007</h3>
            </div>

            <div className="detail-item">
              <span>GENDER</span>
              <h3>Female</h3>
            </div>

            <div className="detail-item">
              <span>EMAIL</span>
              <h3>hasini@klh.edu.in</h3>
            </div>

            <div className="detail-item">
              <span>PHONE</span>
              <h3>+91 98765 43210</h3>
            </div>

            <div className="detail-item">
              <span>PROGRAMME</span>
              <h3>B.Tech — Computer Science Engineering</h3>
            </div>

            <div className="detail-item">
              <span>SEMESTER</span>
              <h3>III (Current)</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;