import React from 'react'
import { Link } from 'react-router-dom';

function RegisterSuccess() {
  return (
    <div className='successContainer'>
      <div>
        <div className='successTxt'>Sucess! Account has been created</div>
        <Link className='large ui inverted black button' to='/'>Home</Link>
      </div>
    </div>
  )
}

export default RegisterSuccess