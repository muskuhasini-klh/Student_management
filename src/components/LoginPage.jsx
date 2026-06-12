import { useState, useEffect, useRef } from "react";

function LoginPage({ onLogin }) {
  const [captcha, setCaptcha] = useState("");
  const [securityInput, setSecurityInput] = useState("");
  const [error, setError] = useState("");

  const emailRef = useRef();

  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let code = "";

    for (let i = 0; i < 6; i++) {
      code += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setCaptcha(code);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(emailRef.current.value);

    if (securityInput !== captcha) {
      setError("Invalid Security Code");
      return;
    }

    setError("");
    onLogin();
  };

  return (
    <div className="login-page">
      <div className="university-header">
        <img
          src="https://klh.edu.in/wp-content/uploads/2020/04/LOGO3.png"
          alt="KLH Logo"
          className="college-logo"
        />

        <h1>Koneru Lakshmaiah University</h1>

        <p>Aziz Nagar, Hyderabad, Telangana</p>
      </div>

      <div className="login-box">
        <div className="login-title">
          Student Login
        </div>

        <form onSubmit={handleSubmit}>
          <label>Registered Email</label>

          <input
            ref={emailRef}
            type="email"
            placeholder="Enter Registered Email"
            required
          />

          <label>Security Code</label>

          <input
            type="text"
            value={securityInput}
            onChange={(e) =>
              setSecurityInput(e.target.value)
            }
            placeholder="Enter Security Code"
            required
          />

          {error && (
            <p
              style={{
                color: "red",
                marginTop: "5px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              {error}
            </p>
          )}

          <div className="captcha-row">
            <div className="captcha-box">
              {captcha}
            </div>

            <button
              type="button"
              className="refresh-btn"
              onClick={() => {
                generateCaptcha();
                setSecurityInput("");
                setError("");
              }}
            >
              ↻
            </button>
          </div>

          <button type="submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;