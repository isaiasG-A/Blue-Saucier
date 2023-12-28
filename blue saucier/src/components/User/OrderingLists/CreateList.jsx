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

    console.log("item", item)
    console.log("quantity", quantity)
    console.log("unitPrice", unitPrice)
    console.log("total", total)
    console.log("cat", category)

   try {
    const docRef = await addDoc(collection(db, `${username} lists`), {
      categ: category,      
      itm: item,
      qtty: quantity,
      unitP: unitPrice,
      tot: total,
    });
    console.log("Document written with ID: ", docRef.id)
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
    <div>
      <Link to='/mainMenu'>Main Menu</Link>
      <Link to='/manageListu'>Manage Lists</Link>
      <form onSubmit={createList}>
        <label>Category</label>
          <select onChange={(e) => setCategory(e.target.value)}>
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
          type="text" 
          value={item}
          onChange={(e) => setItem(e.target.value)}
          />
        </label>
        <label>
          Quantity:
          <input 
            type="text" 
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <label>
          Unit Price $
          <input 
            type="text" 
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
            />
        </label>
        <label>
          Total $
          <input 
            type="text" 
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CreateList