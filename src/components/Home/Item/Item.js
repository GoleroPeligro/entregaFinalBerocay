import "./Item.css";
import {Link} from "react-router-dom";


const Item = ({ id, name, image, price, stock }) => {
    return (
        <div className="item">
            <Link className="item-link" to={`/product/${id}`}>
                <div className="img-cntr">
                    <img className="img-prod" alt={name} src={image} />
                </div>
                <div className="info-container">
                    <h2>{name}</h2>
                    <h3>${price}</h3>
                    <p>stock: {stock}</p>
                </div>
            </Link>
        </div>

    )
}

export default Item;