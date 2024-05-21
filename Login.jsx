import React, { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { loginUser } from "./api";

export default function Login() {
  const [user, setUser] = useState({});
  const { state } = useLocation();
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const navigate=useNavigate();
  const location = useLocation();
  const from=location.state?.from||"/host";
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting")
    setError(null);
    
    try {
      const data= await loginUser(user)
      console.log(data);
      localStorage.setItem("loggedIn",true)
      navigate(from,{replace:true})
    } catch (err) {
      // console.log(err);
      setError(err);
    } finally {
      // console.log(status);
      setStatus("idle");
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <section className="login-container">
      <h1 className={state?"err-msg":""}>{state ? state.message : "Sign in to your Account"}</h1>
      {error && <p className="err-msg">{error.message}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={user.email || ""}
          placeholder="Email Address"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={user.password || ""}
          placeholder="Password"
        />
        {/* <input type='submit' value='Log in' className='submit'/> */}
        <button disabled={status === "submitting"} className="submit">
          {status === "submitting" ? "Logging in" : "Log in"}
        </button>
      </form>
    </section>
  );
}
