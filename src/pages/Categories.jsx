import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';

import { Navbar } from '../components/global/Navbar';
import { Footer } from '../components/global/Footer';
import { HighlightCard } from '../components/global/HighlightCard';
import { categoryOptions, categoryMap } from '../data/categories';

const products = [
    { id: 1, titulo: 'Café Artesanal', rating: 5, categoria: 'Cafés', img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80' },
    { id: 2, titulo: 'Doce Caseiro', rating: 5, categoria: 'Doces', img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80' },
    { id: 3, titulo: 'Cerveja Local', rating: 5, categoria: 'Bebidas', img: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&q=80' },
    { id: 4, titulo: 'Pão Artesanal', rating: 4, categoria: 'Padaria', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80' },
    { id: 5, titulo: 'Queijo Artesanal', rating: 5, categoria: 'Laticínios', img: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&q=80' },
    { id: 6, titulo: 'Frutas da Temporada', rating: 5, categoria: 'Hortifruti', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80' },
    { id: 7, titulo: 'Mel Orgânico', rating: 5, categoria: 'Doces', img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80' },
    { id: 8, titulo: 'Granola Natural', rating: 4, categoria: 'Cereais', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80' },
    { id: 9, titulo: 'Suco Verde', rating: 5, categoria: 'Bebidas', img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80' },
    { id: 10, titulo: 'Azeite Extra Virgem', rating: 5, categoria: 'Tempero', img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80' },
    { id: 11, titulo: 'Pimenta Artesanal', rating: 4, categoria: 'Tempero', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80' },
    { id: 12, titulo: 'Iogurte Natural', rating: 5, categoria: 'Laticínios', img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&q=80' },
];

export function Categories() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState('');

    const categoryParam = searchParams.get('tipo');
    const initialFilter = categoryParam && categoryMap[categoryParam] ? categoryMap[categoryParam] : 'Tudo';
    const [activeFilter, setActiveFilter] = useState(initialFilter);

    const categoryOptionsWithAll = [{ id: 'all', label: 'Tudo' }, ...categoryOptions];

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
        if (filter === 'Tudo') {
            setSearchParams({});
            return;
        }

        const selectedCategory = categoryOptions.find((item) => item.label === filter);
        if (selectedCategory) {
            setSearchParams({ tipo: selectedCategory.id });
        }
    };

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesFilter = activeFilter === 'Tudo' || product.categoria === activeFilter;
            const matchesSearch = product.titulo.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesFilter && matchesSearch;
        });
    }, [activeFilter, searchTerm]);

    return (
        <div className="min-h-screen bg-[#FDF8EE] text-slate-800 font-sans flex flex-col justify-between">
            <Navbar />

            <section className="bg-[#123035] text-white pt-10 pb-14 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-300 mb-3">
                                Explore por categoria
                            </p>
                            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                                Produtos da sua região
                            </h1>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto mt-8">
                        <div className="relative flex items-center">
                            <Search className="absolute left-4 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Buscar por produtos e categorias..."
                                className="w-full pl-12 pr-6 py-3.5 bg-white text-slate-800 placeholder-slate-400 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm md:text-base"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-6 md:px-12 py-10 w-full flex-grow">
                <div className="flex flex-col md:flex-row gap-8">
                    <aside className="w-full md:w-72 flex-shrink-0">
                        <div className="bg-[#F6E8D0] rounded-3xl p-5 shadow-sm border border-orange-100 sticky top-6">
                            <div className="flex items-center justify-between mb-5">
                                <h3 className="text-lg font-black uppercase tracking-wider text-slate-900">
                                    Categorias
                                </h3>
                                <span className="text-[10px] text-slate-600 font-bold">{categoryOptionsWithAll.length - 1}</span>
                            </div>

                            <div className="space-y-2">
                                {categoryOptionsWithAll.map((category) => {
                                    const isSelected = activeFilter === category.label;
                                    return (
                                        <button
                                            key={category.id}
                                            type="button"
                                            onClick={() => handleFilterChange(category.label)}
                                            className={`w-full flex items-center justify-between rounded-2xl px-3 py-3 text-left text-sm font-bold transition-colors ${isSelected
                                                    ? 'bg-[#123035] text-white shadow-md'
                                                    : 'text-slate-800 hover:bg-orange-200/60'
                                                }`}
                                        >
                                            <span>{category.label}</span>
                                            {category.label !== 'Tudo' && (
                                                <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-emerald-300' : 'text-slate-500'}`} />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </aside>

                    <div className="flex-1">
                        <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
                            <div>
                                <h2 className="text-xl md:text-2xl font-black tracking-wide uppercase text-slate-900">
                                    {activeFilter === 'Tudo' ? 'Todos os Produtos' : activeFilter}
                                </h2>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                <span className="font-semibold">{filteredProducts.length} itens</span>
                                <ChevronRight className="w-4 h-4" />
                            </div>
                        </div>

                        <section className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                            {filteredProducts.map((item) => (
                                <div key={item.id} className="aspect-square">
                                    <HighlightCard
                                        id={item.id}
                                        title={item.titulo}
                                        image={item.img}
                                        rating={item.rating}
                                    />
                                </div>
                            ))}
                        </section>

                        {filteredProducts.length === 0 && (
                            <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-[#F6E8D0] p-10 text-center">
                                <p className="text-lg font-black uppercase tracking-wide text-slate-800">
                                    Nenhum produto encontrado
                                </p>
                                <p className="mt-2 text-sm text-slate-600">
                                    Tente outra busca ou selecione outra categoria.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
