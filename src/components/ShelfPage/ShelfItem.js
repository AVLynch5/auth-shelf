import {useDispatch} from 'react-redux'

function  ShelfItem ({item}) {
    const dispatch = useDispatch()

    const handleDelete = () => {
      dispatch({ type: 'DELETE_AN_ITEM', payload: item.id })
    }

    return(
        <li>Item: {item.description} 
        <br/>
        <br/>
        Photo: <img src={item.image_url} />
        <br></br>
        <button onClick={handleDelete}>Delete</button>
    </li>
       
    )
}

export default ShelfItem;