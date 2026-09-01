import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Search, ShoppingCart } from 'lucide-react';
import { CategoryDropdown } from './CategoryDropdown';

export function Navbar({ cartCount = 0 }) {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <header className="bg-[#123035] text-white py-4 px-6 md:px-12 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="bg-red-500/20 p-1.5 rounded-full">
                        <MapPin className="w-6 h-6 text-red-500 fill-red-500" />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="font-extrabold text-lg tracking-wider text-white">MERCADINHO</span>
                        <span className="font-bold text-sm tracking-widest text-slate-200">REGIONAL</span>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link to="/" className={`hover:text-emerald-400 transition-colors pb-1 ${isActive('/') ? 'border-b-2 border-emerald-400 text-emerald-400 font-semibold' : 'text-slate-200'}`}>
                        Home
                    </Link>

                    <CategoryDropdown />

                    <Link to="/categorias?ofertas=true" className={`hover:text-emerald-400 transition-colors pb-1 ${location.pathname === '/categorias' && location.search.includes('ofertas=true') ? 'border-b-2 border-emerald-400 text-emerald-400 font-semibold' : 'text-slate-200'}`}>
                        Ofertas
                    </Link>

                    <Link to="/minha-conta" className={`hover:text-emerald-400 transition-colors pb-1 ${isActive('/minha-conta') ? 'border-b-2 border-emerald-400 text-emerald-400 font-semibold' : 'text-slate-200'}`}>
                        Minha Conta
                    </Link>

                    <Link to="/carrinho" className={`hover:text-emerald-400 transition-colors pb-1 ${isActive('/carrinho') ? 'border-b-2 border-emerald-400 text-emerald-400 font-semibold' : 'text-slate-200'}`}>
                        Carrinho [{cartCount}]
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <button type="button" className="text-slate-200 hover:text-white transition-colors" aria-label="Buscar">
                        <Search className="w-5 h-5" />
                    </button>

                    <Link to="/carrinho" className="relative text-slate-200 hover:text-white transition-colors">
                        <ShoppingCart className="w-6 h-6" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
}