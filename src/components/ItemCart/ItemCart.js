import {useContext} from 'react';
import './ItemCart.css';
import { CartContext } from "../../Context/CartContext";

const ItemCart = ({product}) => {

    const{deleteItem} = useContext(CartContext);

    return (
        <div className="itemCart">
            <div className='imgCart'>
                <img src={product.image} alt={product.name} />
            </div>
            <div className='infoCart'>
                <p><strong>{product.name}</strong></p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: ${product.price}</p>
                <p><strong>Subtotal: ${product.quantity * product.price}</strong></p>
                <button onClick={() => deleteItem(product.id)}>X</button>
            </div>
        </div>
    )
 
}

export default ItemCart