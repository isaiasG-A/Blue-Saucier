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
    console.log("Document written with ID: ", docRef.id);
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
    <div>
      <Link to='/mainMenu'>Main Menu</Link>
      <Link to='/manageMenu'>Manage Menu</Link>
      <form onSubmit={createMenu}>
        <label>Category</label>
        <select onChange={setCat}>
          <option></option>
          <option value={'Apetizer'}>Appetizers</option>
          <option value={'Breakfast'}>Breakfast</option>
          <option value={'Lunch'}>Lunch</option>
          <option value={'Main'}>Main</option>
          <option value={'Drinks'}>Drinks</option>
          <option value={'Desserts'}>Desserts</option>
        </select>
        <label>
          Dish:
          <input 
            type='text'
            value={dish}
            onChange={(e) => setDish(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input 
            type="text" 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CreateMenu;

