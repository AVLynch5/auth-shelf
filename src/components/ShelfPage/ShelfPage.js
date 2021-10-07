import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function ShelfPage() {
  const dispatch = useDispatch();

  //state var to hold newItem details
  const [newItem, setNewItem] = useState({ description: '', image_url: '' });

  //function handePOSTItem
  const handlePOSTItem = (event) => {
    event.preventDefault();
    dispatch({type: 'ADD_NEW_ITEM', payload: newItem});
    setNewItem({ description: '', image_url: '' });
  }

  return (
    
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      {/* map over items from GET */}

      {/* build 'Add' for POST route */}
      <h3>Add a new Item: </h3>
      <form onSubmit={handlePOSTItem}>
        <textarea required placeholder="Item Description" value={newItem.description} type="text" onChange={(event) => setNewItem({ ...newItem, description: event.target.value })} />
        <input required placeholder="Item Image" value={newItem.image_url} type="url" onChange={(event) => setNewItem({ ...newItem, image_url: event.target.value })} />
        <button type="submit">submit</button>
      </form>
    </div >
  );
}

export default ShelfPage;
