import React from 'react';
import { Link } from 'react-router-dom';

function listConfirmation() {
  return (
    <div className='listConfirmationContainer'>
      <div className='confirmationContainer'>
        <h1>List has been created!!</h1>
        <Link className='ui button' to='/createList'>Continue</Link>
      </div>
    </div>
  )
}

export default listConfirmation