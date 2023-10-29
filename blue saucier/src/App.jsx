import './App.css'
import {Routes, Route} from 'react-router-dom';

import Home from './components/Home&navBars/Home';
import Login from './components/Login&Register/Login';
import Register from './components/Login&Register/Register';

function App() {

  return (
    <>
      <Routes>
        <Route 
          path='/'
          element={<Home />}
        />
        <Route 
          path='/login'
          element={<Login />}
        />
        <Route 
          path='/register'
          element={<Register />}
        />
      </Routes>
    </>
  )
}

export default App
