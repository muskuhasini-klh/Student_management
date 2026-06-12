function Attendance() {
  const subjects = [
    {
      name: "Data Structures",
      attended: 42,
      total: 48,
      percentage: 87,
      color: "#18a673",
    },
    {
      name: "Front End Development",
      attended: 36,
      total: 44,
      percentage: 82,
      color: "#c58514",
    },
    {
      name: "Japanese",
      attended: 28,
      total: 40,
      percentage: 70,
      color: "#c0392b",
    },
    {
      name: "Mathematics for Data Science",
      attended: 38,
      total: 40,
      percentage: 95,
      color: "#18a673",
    },
    {
      name: "Artificial Intelligence",
      attended: 30,
      total: 36,
      percentage: 83,
      color: "#2563eb",
    },
  ];

  return (
    <>
      <h1>Attendance Overview</h1>

      <p>Semester III — January 2025 to May 2025</p>

      <div className="cards">
        <div className="card green-card">
          <h4>Overall Attendance</h4>
          <h1>82%</h1>
          <p>Across all subjects</p>
        </div>

        <div className="card blue-card">
          <h4>Classes Attended</h4>
          <h1>237</h1>
          <p>Total attended</p>
        </div>

        <div className="card blue-card">
          <h4>Classes Held</h4>
          <h1>250</h1>
          <p>Total conducted</p>
        </div>

        <div className="card red-card">
          <h4>Shortage Risk</h4>
          <h1>1</h1>
          <p>Below 75%</p>
        </div>
      </div>

      <div className="subject-container">
        <h2>Subject-wise Attendance</h2>

        {subjects.map((subject, index) => (
          <div key={index} className="subject-row">
            <div className="subject-header">
              <span>{subject.name}</span>
              <span>
                {subject.attended}/{subject.total}
              </span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${subject.percentage}%`,
                  background: subject.color,
                }}
              ></div>
            </div>

            <div className="percentage-badge">
              {subject.percentage}%
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Attendance;