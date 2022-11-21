import Home from "../screens/Home";
import ItemDetail from "../components/Home/ItemDetail/ItemDetail";
import NavBar from "../components/NavBar/NavBar";
import Cart from "../components/Home/Cart/Cart"
import ItemListContainer from "../components/container/ItemListConatiner/ItemListContainer";
import CartProvider from "../Context/CartContext"
import FormCheckOut from "../components/Home/Cart/FormCheckOut";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Router = () => {
  return (
   
      <BrowserRouter>
       <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/category/:cat" element={<ItemListContainer />}></Route>
          <Route path="/product/:idProduct" element={<ItemDetail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<FormCheckOut />}></Route>
          <Route path="/*" element={<div>404 not found</div>}></Route>
        </Routes>
        </CartProvider>
      </BrowserRouter>
  );
};

export default Router;