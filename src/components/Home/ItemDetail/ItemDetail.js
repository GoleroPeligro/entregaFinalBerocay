import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import "./ItemDetail.css";
import ItemCount from "../../ItemCount/ItemCount";
import { CartContext } from "../../../Context/CartContext"
import { Link } from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore"


const Item = () => {
  
  const {addToCart, isInCart} = useContext(CartContext); //importamos el contexto del cart

  const {idProduct } = useParams();

  const [product, setProduct] = useState({});

  const [quantity, setQuantity] = useState(1);

  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (quantityToAdd) => {
   setQuantity(quantityToAdd)
  }

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", idProduct) 
    getDoc(itemRef).then(res =>
      setProduct({id: res.id, ...res.data() })
    ) 
  }, []);

  const stock = product.stock;

  return (
    <div className="item-detail">
      <div className="img-container">
        <img className="img-prod" alt={product.name} src={product.image} />
      </div>
      <div className="info-container">
        <h2>{product.name}</h2>
        <h2>${product.price}</h2>
        <p><strong>Detalle:</strong> {product.detail}</p>
      </div>
      <div>
        {goToCart ?
          <Link className="link-cart" to="/cart">Ir al carrito</Link>
          :
          <ItemCount stock={stock} onAdd={onAdd} />
        }

      </div>
      <button className="btn-comprar" onClick={() => {
        setGoToCart(true);
        isInCart(product.id) ?
          console.log("el producto ya esta en el carrito") :
          addToCart({ id: product.id, name: product.name, price: product.price, image: product.image},
            quantity)
      }}>Add to Cart</button>

      <p className="stock">Stock disponible: {stock}</p>
    </div>

  )
};

export default Item;
