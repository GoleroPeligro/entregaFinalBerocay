import carticon from './263142.png'
import { useContext, useState } from "react";
import { CartContext } from '../../../Context/CartContext';
import {Link} from "react-router-dom";



const CartWidget = () => {

    const { totalProducts } = useContext(CartContext);
    return (
        <Link to="/cart">
            <div>
                {totalProducts() > 0 ?
                    <p className="cart-count">{totalProducts()}</p>
                    :
                    <p className='cartNoCount'></p>
                }
            
            <img src={carticon}/>
        </div>
        </Link>
    )
}

export default CartWidget;