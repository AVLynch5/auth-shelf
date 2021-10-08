import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
// Import shelf item component
import ShelfItem from './ShelfItem';

function ShelfPage() {
  // set selector
  const reduxStore = useSelector(store => store);
  const { setShelf } = reduxStore;
// do a dispatch
const dispatch = useDispatch();

useEffect( () => {
  dispatch({type: 'FETCH_SHELF'});
}, [dispatch]);

return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      {/* map over items from GET */}
      {/* <p>{JSON.stringify(setShelf)}</p> */}
      <ul>
        
        {setShelf.map((item, i) => (<ShelfItem key={item.id} item={item} />))}
      </ul>
      {/* build 'Add' for POST route */}
    </div>
  );
}

export default ShelfPage;
