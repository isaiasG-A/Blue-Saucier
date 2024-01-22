import React from 'react';
import { Link } from 'react-router-dom';
import CalendarData from '../GoogleCalendar/CalendarData';

function MainMenu({name, token, signout }) {

  return (
    <div>
      <h1>Hello, {name}</h1>
      <Link to='/menuPlanning'>Menu Planning</Link>
      <Link to='/orderingListMenu'>Ordering Lists</Link>
      <Link onClick={() => CalendarData()}>Calendar</Link>
      <button onClick={signout}>Logout</button>
    </div>
  )
}

export default MainMenu


