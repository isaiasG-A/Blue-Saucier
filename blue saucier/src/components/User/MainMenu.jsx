import React from 'react';
import { Link } from 'react-router-dom';
import CalendarData from '../GoogleCalendar/CalendarData';
import menuPlanning from '../../images/menuCreate.jpg';
import orderingLists from '../../images/menuList.jpg';
import googleCalendar from '../../images/googleCalendar.png';

function MainMenu({name, token, signout }) {

  return (
    <div className='userMenuContainer'>
      <button className='ui inverted button logoutBttn' onClick={signout}>Logout</button>
      <div className='userMenu'>
     <h1>Hello, {name}</h1>

     <div className='userMenuOptions'>
        <Link style={{ cursor: 'pointer'}} to='/menuPlanning'>
          <div class="ui card">
            <a class="image" href="#">
              <img src={menuPlanning}/>
            </a>
            <div class="content">
              <a class="header" href="#">Menu Planing</a>
            </div>
         </div>
        </Link>
        <Link style={{ cursor: 'pointer'}} to='/orderingListMenu'>
          <div class="ui card">
            <a class="image" href="#">
            <img src={orderingLists}/>
            </a>
            <div class="content">
              <a class="header" href="#">Ordering Lists</a>
            </div>
          </div>
        </Link>
        <Link style={{cursor: 'pointer'}} onClick={() => CalendarData()}>
          <div class="ui card">
            <a class="image" href="#">
            <img src={googleCalendar}/>
            </a>
            <div class="content">
              <a class="header" href="#">Google Calendar</a>
            </div>
          </div>
        </Link>
      </div>
     </div>
    </div>
  )
}

export default MainMenu


