import React from 'react';
import { Link } from 'react-router-dom';

function listConfirmation() {
  return (
    <div>
      <h1>List has been created!!</h1>
      <Link to='/createList'>Continue</Link>
    </div>
  )
}

export default listConfirmation