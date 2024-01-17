import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CalendarData from '../GoogleCalendar/CalendarData';

function MainMenu({name, token, signout }) {

  return (
    <div>
      <h1>Hello, {name}</h1>
      <Link to='/menuPlanning'>Menu Planning</Link>
      <Link to='/orderingListMenu'>Ordering Lists</Link>
      <button onClick={() => CalendarData()}></button>
      <Link>My Profile</Link>
      <button onClick={signout}>Logout</button>
    </div>
  )
}

export default MainMenu


