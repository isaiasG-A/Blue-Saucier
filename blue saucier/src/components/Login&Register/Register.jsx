import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase/index';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function register(event) {
    event.preventDefault();

    if(password.length < 6) {
      setError('Password needs to be at least 6 characters long')
    } else {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      
      updateProfile(auth.currentUser, {
        displayName: `${firstName} ${lastName}`
      })
      const user = userCredential.user;
      console.log(user)
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error", errorCode)
      console.log("Error Message", errorMessage)
    });
  }
      setError('')
      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
      navigate('/success')
    }

  return (
    <div>
      <form onSubmit={register}>
        <label>
          First Name:
          <input 
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input 
            type="text" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            />
        </label>
        <label>
          Email:
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <p>{error}</p>
        <label>
          Password:
          <input 
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
      <footer>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </footer>
    </div>
    )
  }

export default Register