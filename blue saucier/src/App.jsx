import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from './components/Home&navBars/Home';
import Login from './components/Login&Register/Login';
import Register from './components/Login&Register/Register';
import Success from './components/Login&Register/Success';
import About from './components/Home&navBars/About';
import MainMenu from './components/User/MainMenu';
import MenuPlanning from './components/User/Menu/MenuPlanning';
import CreateMenu from './components/User/Menu/CreateMenu';
import ManageMenu from './components/User/Menu/ManageMenu';
import MenuConfirmation from './components/User/Menu/MenuConfirmation';
import OrderListMenu from './components/User/OrderingLists/OrderListMenu';
import { auth } from './components/firebase/index';
import { useState } from 'react';
import { signOut } from "firebase/auth";

function App() {
  const [token, setToken] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

function signout() {
  signOut(auth).then(() => {
    setName('')
    setToken('')
    navigate('/')
  }).catch((error) => {
    console.log(error)
  });
}

  return (
    <>
      <Routes>
        <Route 
          path='/'
          element={<Home />}
        />
        <Route 
          path='/login'
          element={<Login setName={setName} setToken={setToken} setUsername={setUsername}/>}
        />
        <Route 
          path='/register'
          element={<Register />}
        />
         <Route 
          path='/success'
          element={<Success/>}
        /> 
        <Route 
          path='/about'
          element={<About/>}
        />
        <Route 
          path='/mainMenu'
          element={<MainMenu name={name}  token={token} signout={signout}/>}
        />
        <Route 
          path="/menuPlanning"
          element={<MenuPlanning />}
        />
        <Route 
          path='/createMenu'
          element={<CreateMenu username={username}/>}
        />
        <Route 
          path='/manageMenu'
          element={<ManageMenu username={username}/>}

        />
        <Route 
          path='/menuConfirmation'
          element={<MenuConfirmation />}
        />
        <Route 
          path='/orderingListMenu'
          element={<OrderListMenu />}
        />
      </Routes>
    </>
  )
}

export default App
