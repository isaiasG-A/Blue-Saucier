import React from 'react';
import { Link } from 'react-router-dom';

function OrderListMenu() {
  return (
    <div>
      <Link to='/createList'>Create List</Link>
      <Link to='/manageList'>Manage List</Link>
    </div>
  )
}

export default OrderListMenu