import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc} from "firebase/firestore"; 
import { db } from '../../firebase/index';
import { Link } from 'react-router-dom';

function CreateList({ username }) {
  const [category, setCategory] = useState('');
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [total, setTotal] = useState('');
  const navigate = useNavigate();

  async function createList(e) {
    e.preventDefault();

   try {
    const docRef = await addDoc(collection(db, `${username} lists`), {
      categ: category,      
      itm: item,
      qtty: quantity,
      unitP: unitPrice,
      tot: total,
    });
   } catch(e) {
    console.log("Error adding List: ", e)
   }

   setItem('')
   setQuantity('')
   setUnitPrice('')
   setTotal('')
   setCategory('')
   navigate('/listConfirmation')
  }

  return (
    <div className='createListContainer'>
      <Link className='ui inverted button' style={{margin: '.5%'}} to='/mainMenu'>Main Menu</Link>
      <Link className='ui inverted button'to='/manageList'>Manage Lists</Link>
      <form className='ui form createListOptions' onSubmit={createList}>
        <label>Category</label>
          <select style={{marginBottom: '6%'}} onChange={(e) => setCategory(e.target.value)}>
          <option></option>
          <option value={'Produce'}>Produce</option>
          <option value={'Herbs'}>Herbs</option>
          <option value={'Dairy'}>Dairy</option>
          <option value={'Meat'}>Meat</option>
          <option value={'Seafood'}>Seafood</option>
          <option value={'Grains'}>Grains</option>
          <option value={'Alcohol'}>Alcohol</option>
          <option value={'Other'}>Other</option>
        </select>
        <label>
          Item Name:
          <input
          style={{marginBottom: '6%'}} 
          type="text" 
          value={item}
          onChange={(e) => setItem(e.target.value)}
          />
        </label>
        <label>
          Quantity:
          <input 
            style={{marginBottom: '6%'}} 
            type="text" 
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <label>
          Unit Price $
          <input 
            style={{marginBottom: '6%'}} 
            type="text" 
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
            />
        </label>
        <label>
          Total $
          <input 
            style={{marginBottom: '6%'}} 
            type="text" 
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            />
        </label>
        <button className='ui button' style={{marginTop: '5%'}}>Submit</button>
      </form>
    </div>
  )
}

export default CreateList