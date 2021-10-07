import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
// Import shelf item component
import ShelfItem from './ShelfItem';

function ShelfPage() {
  // set selector
  const { setShelfItems } = useSelector(store => store);
// do a dispatch
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      {/* map over items from GET */}
      <ul>
        {setShelfItems.map((item, i) => (<ShelfItem key={i} item={item} />))}
      </ul>
      {/* build 'Add' for POST route */}
    </div>
  );
}

export default ShelfPage;
