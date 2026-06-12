import { useParams } from "react-router-dom";
import { useState } from "react";

function StudentProfile() {
  const { id } = useParams();

  const [student, setStudent] = useState({
    id,
    name: "Student " + id,
    email: `student${id}@gmail.com`,
    course: "Computer Science",
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      alert("Student Updated Successfully");
      setEditMode(false);
    }, 1000);
  };

  return (
    <div>
      <h2>Student Profile</h2>

      {!editMode ? (
        <div className="card">
          <p>
            <strong>ID:</strong> {student.id}
          </p>

          <p>
            <strong>Name:</strong> {student.name}
          </p>

          <p>
            <strong>Email:</strong> {student.email}
          </p>

          <p>
            <strong>Course:</strong> {student.course}
          </p>

          <button onClick={() => setEditMode(true)}>
            Edit Student
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            placeholder="Name"
          />

          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <input
            type="text"
            name="course"
            value={student.course}
            onChange={handleChange}
            placeholder="Course"
          />

          <button type="submit">Save Changes</button>
        </form>
      )}
    </div>
  );
}

export default StudentProfile;