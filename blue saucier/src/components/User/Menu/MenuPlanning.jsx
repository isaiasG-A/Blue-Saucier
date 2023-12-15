import React from 'react'
import { Link } from 'react-router-dom';

function MenuPlanning() {
  return (
    <div>
      <Link to='/createMenu'>Create Menu</Link>
      <Link to='/manageMenu'>Manage Menu</Link>
    </div>
  )
}

export default MenuPlanning