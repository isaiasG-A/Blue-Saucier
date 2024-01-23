import React from 'react'
import { Link } from 'react-router-dom';
import menuImg from '../../../images/menu.jpg'

function MenuPlanning() {
  return (
    <div>
      <Link to='/createMenu'>
        <div class="ui card">
          <a class="image" href="#">
            <img src={menuImg}/>
          </a>
          <div class="content">
            <a class="header" href="#">Create Menu</a>
          </div>
        </div>
      </Link>
      <Link to='/manageMenu'>Manage Menu</Link>
    </div>
  )
}

export default MenuPlanning