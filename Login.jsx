import React, { useState } from 'react'

export default function Login() {
  const [user,setUser]=useState({});
  function handleChange(event){
    const {name,value}=event.target;
    setUser((prev)=>({...prev,[name]:value}));
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(user);
  }
  return (
    <section className='login-container'>
      <h1>Sign in to your Account</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="text" name="email" onChange={handleChange} value={user.email||""} placeholder='Email Address'/>
        <input type="password" name="password" onChange={handleChange} value={user.password||""} placeholder='Password'/>
        <input type='submit' value='Log in' className='submit'/>
      </form>
    </section>
  )
}
