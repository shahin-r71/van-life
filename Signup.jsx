import React, { useState } from 'react' 
import { useLocation, Link } from "react-router-dom";
import { signupUser, isLoggedIn } from "./api";

export default function Signup() {
  const [status,setStatus]=useState("idle");
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    try {
      const data = await signupUser(user);
      console.log(data);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setStatus("idle");
    } 
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  }
  const { state } = useLocation();
  if (isLoggedIn()) {
    console.log(isLoggedIn())
    return <h1>Welcome to the VanLife!</h1>;
  }
  return (
    <section className="login-container">
      <h1 className={state ? "err-msg" : ""}>
        {state ? state.message : "Sign up to your Account"}
      </h1>
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
          {status === "submitting" ? "Signing up" : "Sign Up"}
        </button>
        
      </form>
      <Link to="/login" className='link'>
        <button className="submit">Already have an account? login</button>
      </Link>
    </section>
  );
}
