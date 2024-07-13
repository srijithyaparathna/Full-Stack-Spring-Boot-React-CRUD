import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {
  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: ""
  });
  const [error, setError] = useState("");
  
  const { name, userName, email } = user;
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError(""); // Clear error on input change
  };

  const onSubmit = async (e) => {
    e.preventDefault();


    try {
      await axios.post("http://localhost:8081/user", user);
      console.log(user);
      navigate("/");
    } catch (err) {
      setError("Error adding user. Please try again.");
      console.error(err); // Log the error for debugging
    }
  };

  return (
    <div className='container'>
      <h2>Register User</h2>
      {error && <div className='alert alert-danger'>{error}</div>} {/* Error message */}
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <form onSubmit={onSubmit}>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>
                Name
              </label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your name'
                name='name'
                value={name}
                onChange={onInputChange}
                required
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='userName' className='form-label'>
                Username
              </label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your username'
                name='userName'
                value={userName}
                onChange={onInputChange}
                required
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input
                type='email' // Changed to 'email' type for validation
                className='form-control'
                placeholder='Enter your email'
                name='email'
                value={email}
                onChange={onInputChange}
                required
              />
            </div>
            <button type='submit' className='btn btn-outline-primary'>
              Submit
            </button>
            <Link className='btn btn-outline-danger mx-2' to='/'>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
