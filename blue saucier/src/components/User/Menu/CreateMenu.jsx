import React, { useState } from 'react';
import { collection, addDoc} from "firebase/firestore"; 
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CreateMenu({username}) {
  const [category, setCategory] = useState('');
  const [dish, setDish] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  async function setCat(e) {
    await setCategory(e.target.value)
  }

async function createMenu(e) {
  e.preventDefault();
   try {
    const docRef = await addDoc(collection(db, `${username} menus`), {
      cat: category,
      dishName: dish,
      pricing: price,
      desc: description
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  setCategory('')
  setDish('')
  setPrice('')
  setDescription('')
  navigate('/menuConfirmation')

} 

  return (
    <div className='createMenuContainer'>
      <Link className='ui inverted button logoutBttn' style={{margin: '1%'}} to='/mainMenu'>Main Menu</Link>
      <Link className='ui inverted button logoutBttn' style={{margin: '1%'}} to='/manageMenu'>Manage Menu</Link>
      <form className='ui form menuContainer' onSubmit={createMenu}>
        <div className='formOptions'>
          <label style={{fontSize: '1.5rem'}}>Category</label>
          <select style={{marginBottom: '15%'}} onChange={setCat}>
            <option></option>
            <option value={'Apetizer'}>Appetizers</option>
            <option value={'Breakfast'}>Breakfast</option>
            <option value={'Lunch'}>Lunch</option>
            <option value={'Main'}>Main</option>
            <option value={'Drinks'}>Drinks</option>
            <option value={'Desserts'}>Desserts</option>
          </select>
          <label style={{fontSize: '1.5rem'}}>
            Dish:
            <input style={{marginBottom: '15%'}}
              type='text'
              value={dish}
              onChange={(e) => setDish(e.target.value)}
            />
          </label>
          <label style={{fontSize: '1.5rem'}}>
            Price:
            <input style={{marginBottom: '15%'}}
              type="text" 
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label style={{fontSize: '1.5rem'}}>
            Description:
            <input style={{marginBottom: '15%'}}
              type='text'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <button className='ui inverted secondary button'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CreateMenu;

