import React, { useState } from 'react';
import { useEffect } from 'react';
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from '../../firebase';
import { Link } from 'react-router-dom';


function ManageMenu({ username }) {
  const [menus, setMenus] = useState([]);
  const [menuId, setMenuId] = useState([]);

useEffect(() => {
  async function getMenus() {
    const querySnapshot = await getDocs(collection(db, `${username} menus`));
    const menusData = querySnapshot.docs.map(doc => doc.data());
    const menusIds = querySnapshot.docs.map(doc => doc.id);
    setMenus(menusData);
    setMenuId([...menusIds]);
  }
  getMenus()
}, [username, menus])

async function deleteMenu(index) {
  let menu = menuId[index];
 await (deleteDoc(doc(db, `${username} menus`, menu)))
}

  return (
    <div>
      <Link to='/mainMenu'>Main Menu</Link>
      <Link to='/createMenu'>Create Menu</Link>

      {menus.map((data, index) => (
       <div className='menuContainer'>
        <h2>Category</h2>
        <p>{data.cat}</p>
        <h2>Description</h2>
        <p key={index}>{data.desc}</p>  
        <h2>Dish</h2>
        <p>{data.dishName}</p>   
        <h2>Price</h2> 
        <p>${data.pricing}</p>
        <button onClick={() => deleteMenu(index)}>Delete</button>
       </div>
      ))}
    </div>
  )
}

export default ManageMenu;



