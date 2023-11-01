import './App.css'
import {Routes, Route} from 'react-router-dom';

import Home from './components/Home&navBars/Home';
import Login from './components/Login&Register/Login';
import Register from './components/Login&Register/Register';
import Success from './components/Login&Register/Success';

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
         <Route 
          path='/success'
          element={<Success/>}
        /> 
      </Routes>
    </>
  )
}

export default App
