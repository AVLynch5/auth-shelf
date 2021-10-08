

function  ShelfItem ({item}) {

    return(
        <li>Item: {item.description} 
        <br/>
        <br/>
        Photo: <img src={item.image_url} />
    </li>
    )
}

export default ShelfItem;