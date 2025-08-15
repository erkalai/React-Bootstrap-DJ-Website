import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call your API
    console.log({ email, password });
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center min-vh-100"
      style={{
        background:
          "radial-gradient(1200px 600px at 20% -10%, rgba(220,53,69,.15), transparent 60%), radial-gradient(900px 500px at 120% 110%, rgba(220,53,69,.15), transparent 60%), #000",
      }}
    >
      <div
        className="card shadow-lg border-0"
        style={{
          width: 350,            // very small card
          backgroundColor: "#0f0f10",
          borderRadius: "1.25rem",
          boxShadow:
            "0 10px 30px rgba(0,0,0,.6), 0 0 0 1px rgba(220,53,69,.25) inset",
        }}
      >
        <div className="card-body p-4">
          <h5 className="text-center mb-3" style={{ color: "#dc3545" }}>
            Login
          </h5>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label text-white-50">Email</label>
              <input
                type="email"
                className="form-control text-white"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  backgroundColor: "#141416",
                  borderColor: "#2a2a2a",
                }}
              />
            </div>

            <div className="mb-2">
              <label className="form-label text-white-50">Password</label>
              <input
                type="password"
                className="form-control text-white"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  backgroundColor: "#141416",
                  borderColor: "#2a2a2a",
                }}
              />
            </div>

            <div className="d-flex justify-content-between mb-3">
              <a href="/forgot-password" className="small" style={{ color: "#dc3545" }}>
                Forgot?
              </a>
              <a href="/register" className="small text-white-50">
                Create account
              </a>
            </div>

            <button
              type="submit"
              className="btn w-100"
              style={{
                backgroundColor: "#dc3545",
                color: "#fff",
                border: "none",
              }}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
