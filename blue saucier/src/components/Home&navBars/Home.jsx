import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <div className='homeContent'>
        <h1 className='homeTitle'>Blue Saucier</h1>
        <div className='homeBttnsContainer'>
          <Link class="ui inverted button lftBtn" to='/register'>Register</Link>
          <Link class="ui inverted button" to='/login'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Home