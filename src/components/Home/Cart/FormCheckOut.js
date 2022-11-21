import "./Cart.css"
import {useState, useEffect, useContext} from "react"
import { CartContext } from "../../../Context/CartContext"
import { collection, addDoc, getFirestore} from "firebase/firestore";
import Swal from "sweetalert2"

const FormCheckOut = () => {

    const { cart, totalPrice } = useContext(CartContext);


    const [order, setOrder] = useState({
        name: "",
        lastname: "",
        phone: "",
        email: "",
        items: cart.map(product => ({ id: product.id, name: product.name, price: product.price, quantity: product.quantity }))
    });

    const handleInput = (e) => {
        e.persist();
        setOrder({ ...order, [e.target.name]: e.target.value })
    }

    const handleOrder = (e) => {
        e.preventDefault();


        const data = {
            name: order.name,
            lastname: order.lastname,
            phone: order.phone,
            email: order.email,
        }

        setOrder({ ...data })

        sendOrder();


    }

    const sendOrder = () => {
        const db = getFirestore();
        const orderCollection = collection(db, "orders"); //crea una nueva coleccion
        addDoc(orderCollection, order) //Guarda la orden en esa coleccion
            .then(({ id }) => {
                Swal.fire({
                    title: "<strong>Su compra se ha realizado con éxito.</strong>",
                    html: `<i>El ID de su compra es ${id}</i>`,
                    icon: 'success'
                })
                //console.log(id);

            },
            )
        //console.log(order);
    }


    return (
        <div className="check-container">
            <div className="form-container">
                <h2>c h e c k o u t</h2>
                <h2>Ingrese los datos</h2>

                <form onSubmit={handleOrder}>
                    <input type="text" className="input-box" name="name" onChange={handleInput} value={order.name} required placeholder="Nombre" />
                    <input type="text" className="input-box" name="lastname" onChange={handleInput} value={order.lastname} required placeholder="Apellido" />
                    <input type="text" className="input-box" name="phone" onChange={handleInput} value={order.phone} required placeholder="Telefono" />
                    <input type="email" className="input-box" name="email" onChange={handleInput} value={order.email} required placeholder="Email" />
                    <input type="submit" value="Comprar" />
                </form>

            </div>

            <div className="cartProdCheck">
                {
                    cart.map(product =>
                        <div key={product.id} className="prodCart">
                            <p><strong>Producto {product.name}</strong></p>
                            <p>Cantidad: {product.quantity}</p>
                            <p><strong>Subtotal:{product.price * product.quantity}</strong></p>
                        </div>
                    )
                }
                <h3><strong>Total:</strong>{totalPrice()}</h3>
            </div>
        </div>
    )
}

export default FormCheckOut