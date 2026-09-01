import { Routes, Route } from 'react-router-dom';
import { Account } from '../pages/Account';
import { Home } from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/produto/:id" element={<ProductDetails />} />
            <Route path="/minha-conta" element={<Account />} />
            <Route path="*" element={<div className="p-8 text-center">Página não encontrada</div>} />
        </Routes>
    );
}