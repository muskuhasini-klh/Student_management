import { useState } from "react";

function Leave() {
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const applyLeave = () => {
    if (!reason || !date) {
      alert("Please fill all fields");
      return;
    }

    setStatus("Pending");
  };

  return (
    <div className="leave-container">

      <h2>Online Leave Application</h2>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <textarea
        placeholder="Enter Leave Reason"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />

      <button onClick={applyLeave}>
        Apply Leave
      </button>

      {status && (
        <div className="leave-status">
          Status: {status}
        </div>
      )}

    </div>
  );
}

export default Leave;