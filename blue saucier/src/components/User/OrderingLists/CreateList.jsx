import React, { useState } from 'react';
import { collection, addDoc} from "firebase/firestore"; 
import { db } from '../../firebase/index';


function CreateList({username}) {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [total, setTotal] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  async function createList(e) {
    e.preventDefault();

   try {
    const docRef = await addDoc(collection(db, `${username} lists`), {
      it: item,
      qt: quantity,
      uP: unitPrice,
      t: total,
      ct: category      
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
    <div>CreateList</div>
  )
}

export default CreateList