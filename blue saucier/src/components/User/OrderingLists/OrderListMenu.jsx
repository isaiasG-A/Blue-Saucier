import React from 'react';
import { Link } from 'react-router-dom';
import createListImg from '../../../images/aboutList.jpg';
import manageListImg from '../../../images/menuCreateList.jpg';

function OrderListMenu() {
  return (
    <div className='orderListMenuContainer'>
      <div className='orderListMenuItems'>
      <Link to='/createList'>
        <div className='ui card'>
          <a className='image' href="#">
          <img src={createListImg}/>
          </a>
          <div class="content">
            <a class="header" href="#">Create List</a>
          </div>
        </div>
      </Link>
      <Link to='/manageList'>
        <div class="ui card">
          <a class="image" href="#">
            <img src={manageListImg}/>
          </a>
          <div class="content">
            <a class="header" href="#">Manage Lists</a>
          </div>
        </div>
      </Link>
      </div>
    </div>
  )
}

export default OrderListMenu