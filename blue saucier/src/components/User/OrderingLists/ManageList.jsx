import React, { useState } from 'react';
import { useEffect } from 'react';
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from '../../firebase';
import { Link } from 'react-router-dom';

function ManageList({ username }) {
  const [lists, setList] = useState([]);
  const [listId, setListId] = useState([]);

  useEffect(() => {
    async function getLists() {
      const querySnapshot = await getDocs(collection(db, `${username} lists`));
      const listsData = querySnapshot.docs.map(doc => doc.data());
      const listIds = querySnapshot.docs.map(doc => doc.id);
      setList(listsData);
      setListId([...listIds]);
    }
    getLists();
  }, [ username ])

  async function deleteList(index) {
    try {
      let list = listId[index];
      // Delete the document from Firestore
      await deleteDoc(doc(db, `${username} lists`, list));
      
      // Update the state by removing the deleted item
      setList(prevLists => prevLists.filter((_, i) => i !== index));
      setListId(prevListIds => prevListIds.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error deleting list:", error);
      // Handle the error (e.g., show a message to the user)
    }
  }

  return (
    <div>
      <Link to='/mainMenu'>Main Menu</Link>
      <Link to='/createList'>Create List</Link>
      {
        lists.map((data, index) => (
          <div key={listId[index]} className='listContainer'>
            <h2>Category</h2>
            <p>{data.categ}</p>
            <h2>Item</h2>
            <p>{data.item}</p>
            <h2>Quantity</h2>
            <p>{data.qtty}</p>
            <h2>Price</h2>
            <p>${data.unitP}</p>
            <h2>Total</h2>
            <p>${data.tot}</p>
            <button onClick={async () => await deleteList(index)}>Delete</button>          </div>
        ))
      }
    </div>
  )
}

export default ManageList