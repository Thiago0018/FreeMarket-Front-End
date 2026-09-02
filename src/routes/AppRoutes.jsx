import { Routes, Route } from 'react-router-dom';
import { Account } from '../pages/Account';
import { Home } from '../pages/Home';
import { Categories } from '../pages/Categories';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import { Favorites } from '../pages/Favorites';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<Categories />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/produto/:id" element={<ProductDetails />} />
            <Route path="/minha-conta" element={<Account />} />
            <Route path="/favoritos" element={<Favorites />} />
            <Route path="*" element={<div className="p-8 text-center">Página não encontrada</div>} />
        </Routes>
    );
}