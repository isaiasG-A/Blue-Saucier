import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { dataBase} from '../firebase/index';
import { collection, addDoc } from "firebase/firestore"; 

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <form action="">
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
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input 
            type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Register