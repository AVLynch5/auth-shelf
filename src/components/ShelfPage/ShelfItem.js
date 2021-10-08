import {useDispatch} from 'react-redux';
import React from 'react';
import { useState } from 'react';

function  ShelfItem ({item}) {
    const dispatch = useDispatch()

    const handleDelete = () => {
      dispatch({ type: 'DELETE_AN_ITEM', payload: item.id })
    }

    const handleEdit = () => {
      console.log('in edit')
      setChecked(!checked);
      //dispatch({ type: 'EDIT_AN_ITEM', payload: item.id })
    }

    //false by default
    const [checked, setChecked] = useState(false);
 
    return(
        <li>Item: {item.description} 
        <br/>
        <br/>
        Photo: <img src={item.image_url} />
        <br></br>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleEdit}>Edit</button>
        {checked ? <textarea placeholder="Edit description"/> : ''}
        {checked ? <input placeholder="Edit Image"/> : ''}
        {checked ? <button>Submit changes</button> : ''}
        </li>
       
    )
}

export default ShelfItem;