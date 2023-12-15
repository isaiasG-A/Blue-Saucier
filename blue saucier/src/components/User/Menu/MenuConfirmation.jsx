import React from 'react';
import { Link } from 'react-router-dom';

function MenuConfirmation() {
  return (
    <div>
      <h1>Menu has been created!!</h1>
      <Link to='/createMenu'>Continue</Link>
    </div>
  )
}

export default MenuConfirmation