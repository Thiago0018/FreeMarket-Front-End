import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Navbar } from '../components/global/Navbar';
import { Footer } from '../components/global/Footer';
import { CategoryFilters } from '../components/categories/CategoryFilters';
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
    const [searchTerm, setSearchTerm] = useState(searchParams.get('busca') || '');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });

    const categoryParam = searchParams.get('tipo');
    const offersParam = searchParams.get('ofertas');
    const initialFilter = categoryParam && categoryMap[categoryParam] ? categoryMap[categoryParam] : 'Tudo';
    const [activeFilter, setActiveFilter] = useState(initialFilter);
    const [isOfferActive, setIsOfferActive] = useState(offersParam === 'true');

    useEffect(() => {
        setSearchTerm(searchParams.get('busca') || '');
    }, [searchParams]);

    const categoryOptionsWithAll = [{ id: 'all', label: 'Tudo' }, ...categoryOptions];

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
        const params = new URLSearchParams(searchParams);

        if (filter === 'Tudo') {
            params.delete('tipo');
        } else {
            const selectedCategory = categoryOptions.find((item) => item.label === filter);
            if (selectedCategory) {
                params.set('tipo', selectedCategory.id);
            }
        }

        if (isOfferActive) {
            params.set('ofertas', 'true');
        } else {
            params.delete('ofertas');
        }

        if (searchTerm.trim()) {
            params.set('busca', searchTerm.trim());
        } else {
            params.delete('busca');
        }

        setSearchParams(params, { replace: true });
    };

    const handleOffersClick = () => {
        const newOfferState = !isOfferActive;
        setIsOfferActive(newOfferState);

        const params = new URLSearchParams(searchParams);

        if (newOfferState) {
            params.set('ofertas', 'true');
        } else {
            params.delete('ofertas');
        }

        if (activeFilter !== 'Tudo') {
            const selectedCategory = categoryOptions.find((item) => item.label === activeFilter);
            if (selectedCategory) {
                params.set('tipo', selectedCategory.id);
            }
        } else {
            params.delete('tipo');
        }

        if (searchTerm.trim()) {
            params.set('busca', searchTerm.trim());
        } else {
            params.delete('busca');
        }

        setSearchParams(params, { replace: true });
    };

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesFilter = activeFilter === 'Tudo' || product.categoria === activeFilter;
            const matchesSearch = product.titulo.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesPrice = true; // TODO: Adicionar preço aos produtos para filtro de preço funcionar
            return matchesFilter && matchesSearch && matchesPrice;
        });
    }, [activeFilter, searchTerm, priceRange]);

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

                    <CategorySearchBar
                        searchTerm={searchTerm}
                        onSearchChange={(nextValue) => {
                            const normalizedValue = nextValue.trim();
                            const params = new URLSearchParams(searchParams);

                            if (normalizedValue) {
                                params.set('busca', normalizedValue);
                            } else {
                                params.delete('busca');
                            }

                            setSearchTerm(nextValue);
                            setSearchParams(params, { replace: true });
                        }}
                    />
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-6 md:px-12 py-10 w-full flex-grow">
                <div className="flex flex-col md:flex-row gap-8">
                    <CategoryFilters
                        categoryOptionsWithAll={categoryOptionsWithAll}
                        activeFilter={activeFilter}
                        onFilterChange={(filter) => handleFilterChange(filter)}
                        onPriceChange={(range) => setPriceRange(range)}
                        isOfferActive={isOfferActive}
                        onOffersClick={handleOffersClick}
                    />

                    <CategoryResults filteredProducts={filteredProducts} activeFilter={activeFilter} />
                </div>
            </main>

            <Footer />
        </div>
    );
}
