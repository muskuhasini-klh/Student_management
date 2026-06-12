import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStudents([
        {
          id: 1,
          name: "Ankita Tiwari",
          course: "Computer Science",
          email: "ankita@gmail.com",
        },
        {
          id: 2,
          name: "Rahul Sharma",
          course: "Information Technology",
          email: "rahul@gmail.com",
        },
        {
          id: 3,
          name: "Priya Verma",
          course: "Artificial Intelligence",
          email: "priya@gmail.com",
        },
      ]);

      setLoading(false);
    }, 1500);
  }, []);

  if (loading) return <h3>Loading Students...</h3>;

  return (
    <div>
      <h2>Student List</h2>

      {students.map((student) => (
        <div key={student.id} className="card">
          <h3>{student.name}</h3>
          <p>Course: {student.course}</p>

          <Link to={`/student/${student.id}`}>
            <button>View Profile</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default StudentList;