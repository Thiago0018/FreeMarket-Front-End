import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Navbar } from '../components/global/Navbar';
import { Footer } from '../components/global/Footer';
import { CategorySidebar } from '../components/categories/CategorySidebar';
import { CategorySearchBar } from '../components/categories/CategorySearchBar';
import { CategoryResults } from '../components/categories/CategoryResults';
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

                    <CategorySearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-6 md:px-12 py-10 w-full flex-grow">
                <div className="flex flex-col md:flex-row gap-8">
                    <CategorySidebar
                        categoryOptionsWithAll={categoryOptionsWithAll}
                        activeFilter={activeFilter}
                        onFilterChange={(filter) => handleFilterChange(filter)}
                    />

                    <CategoryResults filteredProducts={filteredProducts} activeFilter={activeFilter} />
                </div>
            </main>

            <Footer />
        </div>
    );
}
