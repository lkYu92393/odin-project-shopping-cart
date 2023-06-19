import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ShoppingCartRoute from "./../features/shoppingCart/routes/index";

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="shoppingcart/*" element={<ShoppingCartRoute />} />
                <Route path="home" element={<div>Home Sweet Home</div>} />
                <Route path='*' element={<Navigate to='home' />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute;