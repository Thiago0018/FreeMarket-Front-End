import React, { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Search,
    ChevronLeft,
    ChevronRight,
    Coffee,
    Candy,
    Wine,
    Croissant,
    Milk,
    Leaf,
    Wheat,
    Flame
} from 'lucide-react';

import { Navbar } from '../components/global/Navbar';
import { Footer } from '../components/global/Footer';
import { HighlightCard } from '../components/global/HighlightCard';
import { StoreCard } from '../components/home/StoreCard';
import { CategoryDropdown } from '../components/global/CategoryDropdown';
import { SearchSuggestions } from '../components/global/SearchSuggestions';
import { categoryOptions } from '../data/categories';

const destaques = [
    { id: 1, titulo: 'Café Artesanal', rating: 5, img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80' },
    { id: 2, titulo: 'Doce Caseiro', rating: 5, img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80' },
    { id: 3, titulo: 'Cerveja Local', rating: 5, img: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80' },
    { id: 4, titulo: 'Pão Artesanal', rating: 5, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80' },
    { id: 5, titulo: 'Queijo Artesanal', rating: 5, img: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&q=80' },
    { id: 6, titulo: 'Frutas da Temporada', rating: 5, img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80' },
    { id: 7, titulo: 'Mel Orgânico', rating: 5, img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&q=80' },
    { id: 8, titulo: 'Granola Natural', rating: 4, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80' },
];

const lojasBairro = [
    { id: 1, name: 'Padaria do Povo' },
    { id: 2, name: 'Feira da Praça' },
    { id: 3, name: 'Mercado da Vizinhança' },
    { id: 4, name: 'Café do Bairro' },
    { id: 5, name: 'Sabores de Casa' },
    { id: 6, name: 'Laticínio Verde' },
    { id: 7, name: 'Sabor da Rua' },
    { id: 8, name: 'Hortifruti Viva' },
];

const categoryIcons = {
    cafes: Coffee,
    doces: Candy,
    bebidas: Wine,
    padaria: Croissant,
    laticinios: Milk,
    hortifruti: Leaf,
    cereais: Wheat,
    tempero: Flame,
};

export function Home() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryScrollPosition, setCategoryScrollPosition] = useState(0);
    const [highlightStart, setHighlightStart] = useState(0);
    const [storeStart, setStoreStart] = useState(0);
    const [showAllHighlights, setShowAllHighlights] = useState(false);
    const [showAllStores, setShowAllStores] = useState(false);
    const [showAllCategories, setShowAllCategories] = useState(false);

    const visibleHighlights = useMemo(() => {
        if (showAllHighlights) return destaques;
        return destaques.slice(highlightStart, highlightStart + 4);
    }, [highlightStart, showAllHighlights]);

    const visibleStores = useMemo(() => {
        if (showAllStores) return lojasBairro;
        return lojasBairro.slice(storeStart, storeStart + 5);
    }, [storeStart, showAllStores]);

    const visibleCategories = useMemo(() => {
        if (showAllCategories) return categoryOptions;
        return categoryOptions.slice(categoryScrollPosition, categoryScrollPosition + 5);
    }, [categoryScrollPosition, showAllCategories]);

    const handleCategoryScroll = (direction) => {
        const newPosition = direction === 'left' ? categoryScrollPosition - 1 : categoryScrollPosition + 1;
        const maxPosition = Math.max(0, categoryOptions.length - 5);
        setCategoryScrollPosition(Math.min(Math.max(newPosition, 0), maxPosition));
    };

    const handleHighlightScroll = (direction) => {
        const maxStart = Math.max(0, destaques.length - 4);
        setHighlightStart((current) => {
            if (direction === 'left') {
                return Math.max(0, current - 1);
            }
            return Math.min(maxStart, current + 1);
        });
    };

    const handleStoreScroll = (direction) => {
        const maxStart = Math.max(0, lojasBairro.length - 5);
        setStoreStart((current) => {
            if (direction === 'left') {
                return Math.max(0, current - 1);
            }
            return Math.min(maxStart, current + 1);
        });
    };

    const handleSearchSelect = (value) => {
        const cleanValue = value.trim();
        setSearchTerm(cleanValue);
        if (cleanValue) {
            navigate(`/categorias?busca=${encodeURIComponent(cleanValue)}`);
        }
    };

    return (
        <div className="min-h-screen bg-[#FDF8EE] text-slate-800 font-sans flex flex-col justify-between">
            <Navbar />

            <section className="bg-[#2c6868] text-white pt-8 pb-16 px-6 md:px-12 relative">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2">MERCADINHO REGIONAL</h1>
                        <p className="text-lg md:text-xl text-slate-200 font-medium">- A Sua Loja Online Flexível</p>
                    </div>

                    <div className="flex justify-center md:justify-end">
                        <div className="bg-[#1B434A] rounded-2xl p-6 border border-emerald-500/20 shadow-2xl flex items-center gap-4">
                            <div className="text-center"><span className="text-4xl">🏪</span><p className="text-xs text-emerald-300 font-semibold mt-1">Produtor Local</p></div>
                            <div className="text-center"><span className="text-4xl">🤝</span><p className="text-xs text-emerald-300 font-semibold mt-1">Troca & Venda</p></div>
                            <div className="text-center"><span className="text-4xl">🥕</span><p className="text-xs text-emerald-300 font-semibold mt-1">Sem Intermediários</p></div>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto mt-10">
                    <div className="relative flex items-center">
                        <Search className="absolute left-4 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    const cleaned = searchTerm.trim();
                                    if (cleaned) {
                                        navigate(`/categorias?busca=${encodeURIComponent(cleaned)}`);
                                    }
                                }
                            }}
                            placeholder="Buscar produtos e lojas..."
                            className="w-full pl-12 pr-6 py-3.5 bg-white text-slate-800 placeholder-slate-400 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm md:text-base"
                        />
                        <SearchSuggestions query={searchTerm} onSelect={handleSearchSelect} />
                    </div>
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-16 w-full">
                <section>
                    <div className="mb-6 flex items-center justify-between gap-4">
                        <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-wide uppercase">Destaques Locais</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {visibleHighlights.map((item) => (
                            <HighlightCard key={item.id} id={item.id} title={item.titulo} image={item.img} rating={item.rating} />
                        ))}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={() => handleHighlightScroll('left')}
                                disabled={showAllHighlights || highlightStart === 0}
                                className="p-1.5 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                type="button"
                                onClick={() => handleHighlightScroll('right')}
                                disabled={showAllHighlights || highlightStart >= destaques.length - 4}
                                className="p-1.5 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                        <button
                            type="button"
                            onClick={() => setShowAllHighlights((current) => !current)}
                            className="rounded-full bg-[#123035] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-[#1a4450]"
                        >
                            {showAllHighlights ? 'Ver menos' : 'Ver tudo'}
                        </button>
                    </div>
                </section>

                <section>
                    <div className="mb-6 flex items-center justify-between gap-4">
                        <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-wide uppercase">Lojas do seu Bairro</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {visibleStores.map((store) => (
                            <StoreCard key={store.id} name={store.name} />
                        ))}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={() => handleStoreScroll('left')}
                                disabled={showAllStores || storeStart === 0}
                                className="p-1.5 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                type="button"
                                onClick={() => handleStoreScroll('right')}
                                disabled={showAllStores || storeStart >= lojasBairro.length - 5}
                                className="p-1.5 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                        <button
                            type="button"
                            onClick={() => setShowAllStores((current) => !current)}
                            className="rounded-full bg-[#123035] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-[#1a4450]"
                        >
                            {showAllStores ? 'Ver menos' : 'Ver tudo'}
                        </button>
                    </div>
                </section>

                <section>
                    <div className="mb-6 flex items-center justify-between gap-4">
                        <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-wide uppercase">Categorias de Alimentos</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {visibleCategories.map((cat) => {
                            const IconComponent = categoryIcons[cat.id];
                            return (
                                <Link key={cat.id} to={`/categorias?tipo=${cat.id}`} className="bg-[#F6E8D0] p-6 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer hover:bg-orange-200/50 transition-colors">
                                    <div className="mb-3 text-slate-800"><IconComponent className="w-8 h-8 stroke-[1.5]" /></div>
                                    <span className="font-extrabold text-sm text-slate-900">{cat.label}</span>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={() => handleCategoryScroll('left')}
                                disabled={showAllCategories || categoryScrollPosition === 0}
                                className="p-1.5 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                type="button"
                                onClick={() => handleCategoryScroll('right')}
                                disabled={showAllCategories || categoryScrollPosition >= Math.max(0, categoryOptions.length - 5)}
                                className="p-1.5 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                        <button
                            type="button"
                            onClick={() => setShowAllCategories((current) => !current)}
                            className="rounded-full bg-[#123035] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-[#1a4450]"
                        >
                            {showAllCategories ? 'Ver menos' : 'Ver tudo'}
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
