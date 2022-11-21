import { CartContext } from "../../../Context/CartContext"
import { useContext } from "react";
import { Link } from "react-router-dom";
import ItemCart from "../../ItemCart/ItemCart";
import { collection, addDoc, getFirestore} from "firebase/firestore";
import "./Cart.css"


const Cart = () => {

    const { cart, totalPrice, removeList } = useContext(CartContext);

    if (cart.length === 0) {
        return (<div className="emptyCart">
            <h3>El carrito esta vacío</h3>
            <div className="btnEmptyCart">
                <Link className="linkCart" to="/">Ver productos</Link>
            </div>

        </div>);
    }
    return (
        <div className="cart-container">
            <h2>c  a  r  t</h2>
            <div className="cart-content">
                {
                    cart.map(product => <ItemCart key={product.id} product={product} />)
                }
                <div>
                    <h3>Precio total: ${totalPrice()}</h3>
                </div>
                <Link to="/checkout">
                    <button className="btnComprar">Comprar</button>
                </Link>
                <button className="dltCart" onClick={removeList}>vaciar carrito</button>
            </div>
        </div>
    )

}


export default Cart