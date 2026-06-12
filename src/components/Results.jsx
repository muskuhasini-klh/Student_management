function Results() {
  const subjects = [
    {
      code: "DS201",
      subject: "Data Structures",
      internal: 38,
      external: 72,
      total: 110,
      grade: "A",
    },
    {
      code: "FED202",
      subject: "Front End Development",
      internal: 35,
      external: 60,
      total: 95,
      grade: "A",
    },
    {
      code: "JPN203",
      subject: "Japanese",
      internal: 30,
      external: 55,
      total: 85,
      grade: "B+",
    },
    {
      code: "MDS204",
      subject: "Mathematics for Data Science",
      internal: 40,
      external: 78,
      total: 118,
      grade: "A+",
    },
    {
      code: "AI205",
      subject: "Artificial Intelligence",
      internal: 36,
      external: 66,
      total: 102,
      grade: "A",
    },
  ];

  return (
    <>
      <h1>Examination Results</h1>

      <p>Semester III — April 2025 Examinations</p>

      <div className="cards">
        <div className="card green-card">
          <h4>SGPA</h4>
          <h1>8.4</h1>
          <p>This semester</p>
        </div>

        <div className="card blue-card">
          <h4>CGPA</h4>
          <h1>8.1</h1>
          <p>Cumulative</p>
        </div>

        <div className="card green-card">
          <h4>Subjects Cleared</h4>
          <h1>5/5</h1>
          <p>All Passed</p>
        </div>
      </div>

      <div className="subject-container">
        <h2>Result Summary</h2>

        <table className="results-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Subject</th>
              <th>Internal</th>
              <th>External</th>
              <th>Total</th>
              <th>Grade</th>
            </tr>
          </thead>

          <tbody>
            {subjects.map((s) => (
              <tr key={s.code}>
                <td>{s.code}</td>
                <td>{s.subject}</td>
                <td>{s.internal}</td>
                <td>{s.external}</td>
                <td>{s.total}</td>
                <td>{s.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Results;