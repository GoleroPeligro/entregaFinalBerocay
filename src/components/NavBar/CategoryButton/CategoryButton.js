import {Link} from "react-router-dom";

const CategoryButton = (prop, id) => {
    return (
        <div>
            <Link className="category-button" to={`/category/${prop.value.toLowerCase()}`}>{prop.value}</Link>
        </div>
    )
}

export default CategoryButton;