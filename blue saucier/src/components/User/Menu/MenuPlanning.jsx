import React from 'react'
import { Link } from 'react-router-dom';
import menuImg from '../../../images/menu.jpg';
import manageMenu from '../../../images/aboutMenu.jpg';

function MenuPlanning() {
  return (
    <div className='menuPlanningContainer'>
      <div className='menuPlanningItems'>
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
      <Link to='/manageMenu'>
      <div class="ui card">
          <a class="image" href="#">
            <img src={manageMenu}/>
          </a>
          <div class="content">
            <a class="header" href="#">Manage Menu</a>
          </div>
        </div>
      </Link>
      </div>
    </div>
  )
}

export default MenuPlanning