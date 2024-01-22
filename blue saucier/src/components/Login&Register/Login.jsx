import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/index';

function Login({setName, setToken, setUsername}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

function login(e) {
  e.preventDefault();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      
      setUsername(user.uid)
      setName(user.displayName)
      setToken(user.accessToken)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
    });
    navigate('/mainMenu')
}

  return (
    <div className='loginPage'>
      <div className='homeBttnContainer'>
        <Link className='ui inverted button' to='/'>Home</Link>
      </div>
      <form className='ui form regFormLog' onSubmit={login}>
        <div className='fields'  style={{display: 'flex', flexDirection: 'column', marginLeft: '41vw', marginTop: '22v'}}>
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
          <div className='field'>
            <label style={{color: 'white'}}>
            Password:
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          </div>
        </div>
        <button className="ui inverted button regBttn" style={{marginLeft: '42vw'}}>Submit</button>
      </form>
    </div>
  )
}

export default Login