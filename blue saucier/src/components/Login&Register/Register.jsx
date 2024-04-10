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
    <div className='formContainer'>
      <div className='homeBttnContainer'>
        <Link className='ui inverted button' to='/'>Home</Link>
      </div>
      <div className='formInputsContainer'>
      <form className="ui form regForm" onSubmit={register}>
        <div className='fields' style={{display: 'flex', flexDirection: 'column', marginLeft: '41vw', marginTop: '22v'}}>
          <div className='field'>
          <label style={{color: 'white'}}>
            First Name:
            <input 
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          </div>
          <div className='field'>
            <label style={{color: 'white'}}>
              Last Name:
              <input 
                type="text" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                />
            </label>
          </div>
          <div className='field'>
            <label style={{color: 'white'}}>
              Email:
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <p>{error}</p>
          <div className='field'>
            <label style={{color: 'white'}}>
              Password:
              <input 
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>       
        </div>
        <button className="ui secondary button regBttn" style={{marginLeft: '42vw'}}>Submit</button>
      </form>
      </div>
    </div>
    )
  }

export default Register
