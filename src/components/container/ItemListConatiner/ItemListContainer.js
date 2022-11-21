
import Item from '../../Home/Item/Item';
import { useState, useEffect } from 'react';
import "./ItemListContainer.css"
import { useParams } from "react-router-dom";
import {doc, getDocs, getFirestore, collection} from "firebase/firestore"



const ItemListContainer = () => {
  const saludoStyle = {
    backgroundColor: "#008080",
    padding: "10px",

  }
  const [products, setProducts] = useState([]);
  const { cat } = useParams();


  useEffect(() => {

    const db = getFirestore();

    const itemCollectionRef = collection(db, "items");

    getDocs(itemCollectionRef).then(
      (snapshot) => {
        if(snapshot.size === 0){
          console.log("No results");
        }
        setProducts(snapshot.docs.map((doc)=> ({id:doc.id, ...doc.data()})));
          });
  }, []);

  return (
    <div style={saludoStyle}>
      <div className="item-container">
        {cat ?
          products.filter((prod) => prod.category === cat).map((product) => (
            <Item
              id={product.id}
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              detail={product.detail}
              category={product.category}
              stock={product.stock}
            />
          )) :
          products.map((product) => (
            <Item
              id={product.id}
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              detail={product.detail}
              category={product.category}
              stock={product.stock}
            />
          ))
        }

      </div>

    </div>
  )
}


export default ItemListContainer;