import { useState } from "react";

function FeePayment() {
  const totalFee = 100000;

  const [paid, setPaid] = useState(75000);

  const due = totalFee - paid;

  const percentage = (paid / totalFee) * 100;

  const payNow = () => {
    setPaid(totalFee);
  };

  return (
    <>
      <h1>Fee Payment</h1>

      <p>Academic Year 2025 - 2026</p>

      <div className="cards">

        <div className="card green-card">
          <h4>Total Fee</h4>
          <h1>₹100000</h1>
        </div>

        <div className="card blue-card">
          <h4>Paid Amount</h4>
          <h1>₹{paid}</h1>
        </div>

        <div className="card red-card">
          <h4>Due Amount</h4>
          <h1>₹{due}</h1>
        </div>

      </div>

      <div className="subject-container">

        <h2>Payment Progress</h2>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${percentage}%`,
              background: "#18a673",
            }}
          ></div>
        </div>

        <br />

        <h3>{percentage}% Paid</h3>

        {due > 0 ? (
          <button
            className="pay-btn"
            onClick={payNow}
          >
            Pay Now
          </button>
        ) : (
          <div className="payment-success">
            ✅ Full Fee Paid Successfully
          </div>
        )}

      </div>
    </>
  );
}

export default FeePayment;