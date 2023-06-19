import { Navigate, Routes, Route } from "react-router-dom";
import Cart from "./cart/Cart";
import Shop from "./shop/Shop";

const ShoppingCartRoute = () => {
    return (
        <Routes>
            <Route path="cart" element={<Cart />} />
            <Route path="shop" element={<Shop />} />
            <Route path="*" element={<Navigate to='shop' />} />
        </Routes>
    )
}

export default ShoppingCartRoute;