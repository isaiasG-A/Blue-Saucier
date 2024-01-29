import React from 'react';
import { Link } from 'react-router-dom';

function MenuConfirmation() {
  return (
    <div className='menuConfirmation'>
      <div className='menuConfirmationMssg'>
      <h1>Menu has been created!!</h1>
      <Link className='ui button' to='/createMenu'>Continue</Link>
      </div>
    </div>
  )
}

export default MenuConfirmation