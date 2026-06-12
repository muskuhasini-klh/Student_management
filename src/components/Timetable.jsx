function Timetable() {
  return (
    <>
      <h1>Class Timetable</h1>

      <p>Semester III — Academic Schedule</p>

      <div className="subject-container">

        <table className="results-table">

          <thead>
            <tr>
              <th>Time</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>9:00 AM</td>
              <td>Data Structures</td>
              <td>Japanese</td>
              <td>Front End Development</td>
              <td>Artificial Intelligence</td>
              <td>Mathematics for Data Science</td>
            </tr>

            <tr>
              <td>10:00 AM</td>
              <td>Front End Development</td>
              <td>Data Structures</td>
              <td>Japanese</td>
              <td>Mathematics for Data Science</td>
              <td>Artificial Intelligence</td>
            </tr>

            <tr>
              <td>11:00 AM</td>
              <td>Artificial Intelligence</td>
              <td>Front End Development</td>
              <td>Data Structures</td>
              <td>Japanese</td>
              <td>Mathematics for Data Science</td>
            </tr>

            <tr>
              <td>12:00 PM</td>
              <td>BREAK</td>
              <td>BREAK</td>
              <td>BREAK</td>
              <td>BREAK</td>
              <td>BREAK</td>
            </tr>

            <tr>
              <td>2:00 PM</td>
              <td>Japanese</td>
              <td>Artificial Intelligence</td>
              <td>Mathematics for Data Science</td>
              <td>Data Structures</td>
              <td>Front End Development</td>
            </tr>

            <tr>
              <td>3:00 PM</td>
              <td>Mathematics for Data Science</td>
              <td>Japanese</td>
              <td>Artificial Intelligence</td>
              <td>Front End Development</td>
              <td>Data Structures</td>
            </tr>

            <tr>
              <td>4:00 PM</td>
              <td>Front End Development</td>
              <td>Mathematics for Data Science</td>
              <td>Japanese</td>
              <td>Artificial Intelligence</td>
              <td>Data Structures</td>
            </tr>

          </tbody>

        </table>

      </div>
    </>
  );
}

export default Timetable;