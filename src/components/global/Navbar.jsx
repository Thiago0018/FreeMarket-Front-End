import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Search, ShoppingCart } from 'lucide-react';
import { CategoryDropdown } from './CategoryDropdown';

export function Navbar({ cartCount = 0 }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const searchContainerRef = useRef(null);
    const searchInputRef = useRef(null);

    const isActive = (path) => location.pathname === path;
    const hasSearchBarOnPage = location.pathname === '/' || location.pathname === '/categorias';

    useEffect(() => {
        if (location.pathname === '/categorias') {
            const params = new URLSearchParams(location.search);
            setSearchQuery(params.get('busca') || '');
        } else {
            setSearchQuery('');
        }
    }, [location.pathname, location.search]);

    useEffect(() => {
        if (isSearchOpen) {
            searchInputRef.current?.focus();
        }
    }, [isSearchOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
                setIsSearchOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = (value) => {
        const trimmedValue = value.trim();
        const params = new URLSearchParams(location.search);

        if (trimmedValue) {
            params.set('busca', trimmedValue);
        } else {
            params.delete('busca');
        }

        const queryString = params.toString();
        const targetUrl = `/categorias${queryString ? `?${queryString}` : ''}`;

        navigate(targetUrl);
        setIsSearchOpen(false);
    };

    return (
        <header className="bg-[#123035] text-white py-4 px-6 md:px-12 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                <Link to="/" className="flex items-center gap-2 group shrink-0">
                    <div className="bg-red-500/20 p-1.5 rounded-full">
                        <MapPin className="w-6 h-6 text-red-500 fill-red-500" />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="font-extrabold text-lg tracking-wider text-white">MERCADINHO</span>
                        <span className="font-bold text-sm tracking-widest text-slate-200">REGIONAL</span>
                    </div>
                </Link>

                <div className="ml-auto flex items-center gap-4 md:gap-6">
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <Link to="/" className={`hover:text-emerald-400 transition-colors pb-1 ${isActive('/') ? 'border-b-2 border-emerald-400 text-emerald-400 font-semibold' : 'text-slate-200'}`}>
                            Home
                        </Link>

                        <CategoryDropdown />

                        <Link to="/categorias?ofertas=true" className={`hover:text-emerald-400 transition-colors pb-1 ${location.pathname === '/categorias' && location.search.includes('ofertas=true') ? 'border-b-2 border-emerald-400 text-emerald-400 font-semibold' : 'text-slate-200'}`}>
                            Ofertas
                        </Link>

                        <Link to="/favoritos" className={`hover:text-emerald-400 transition-colors pb-1 ${isActive('/favoritos') ? 'border-b-2 border-emerald-400 text-emerald-400 font-semibold' : 'text-slate-200'}`}>
                            Favoritos
                        </Link>

                        <Link to="/minha-conta" className={`hover:text-emerald-400 transition-colors pb-1 ${isActive('/minha-conta') ? 'border-b-2 border-emerald-400 text-emerald-400 font-semibold' : 'text-slate-200'}`}>
                            Minha Conta
                        </Link>
                    </nav>

                    <div ref={searchContainerRef} className="flex items-center gap-2">
                        {!hasSearchBarOnPage && (
                            <div className={`flex items-center transition-all duration-200 ${isSearchOpen ? 'w-52 opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>
                                <div className="relative w-full">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        ref={searchInputRef}
                                        type="text"
                                        value={searchQuery}
                                        onChange={(event) => setSearchQuery(event.target.value)}
                                        onKeyDown={(event) => {
                                            if (event.key === 'Enter') {
                                                handleSearch(searchQuery);
                                            }
                                        }}
                                        placeholder="Buscar..."
                                        className="w-full pl-9 pr-3 py-2 text-sm text-slate-800 placeholder-slate-400 rounded-full border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    />
                                </div>
                            </div>
                        )}

                        {!hasSearchBarOnPage && (
                            <button
                                type="button"
                                onClick={() => {
                                    if (isSearchOpen && searchQuery.trim()) {
                                        handleSearch(searchQuery);
                                        return;
                                    }
                                    setIsSearchOpen((current) => !current);
                                }}
                                className="flex items-center justify-center text-slate-200 hover:text-white transition-colors"
                                aria-label="Buscar"
                            >
                                <Search className="w-5 h-5" />
                            </button>
                        )}

                        <Link to="/carrinho" className="relative text-slate-200 hover:text-white transition-colors shrink-0">
                            <ShoppingCart className="w-6 h-6" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}