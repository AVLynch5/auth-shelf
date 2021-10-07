import React from 'react';
import { useState } from 'react';

function ShelfPage() {
  //state var to hold newItem details
  const [newItem, setNewItem] = useState({description: '', image_url: ''});

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      {/* map over items from GET */}

      {/* build 'Add' for POST route */}
      <h3>Add a new Item: </h3>
      <form>
        <textarea>Description</textarea>
        <input>Image URL</input>
        <button>submit</button>
      </form>
    </div>
  );
}

export default ShelfPage;
