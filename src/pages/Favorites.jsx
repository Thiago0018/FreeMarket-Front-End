import React from 'react';
import { Heart } from 'lucide-react';
import { Navbar } from '../components/global/Navbar';
import { Footer } from '../components/global/Footer';
import { HighlightCard } from '../components/global/HighlightCard';
import { useFavorites } from '../context/FavoritesContext';

const favoriteProducts = [
    { id: 1, titulo: 'Café Artesanal', rating: 5, img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80' },
    { id: 2, titulo: 'Doce Caseiro', rating: 5, img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80' },
    { id: 3, titulo: 'Cerveja Local', rating: 5, img: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&q=80' },
    { id: 4, titulo: 'Pão Artesanal', rating: 4, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80' },
    { id: 5, titulo: 'Queijo Artesanal', rating: 5, img: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&q=80' },
    { id: 8, titulo: 'Granola Natural', rating: 4, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80' },
];

export function Favorites() {
    const { favoriteIds } = useFavorites();
    const favorites = favoriteProducts.filter((product) => favoriteIds.includes(product.id));

    return (
        <div className="min-h-screen bg-[#FDF8EE] text-slate-800 font-sans flex flex-col justify-between">
            <Navbar />

            <main className="max-w-7xl mx-auto w-full flex-grow px-6 py-10 md:px-12">
                <div className="mb-8 flex items-center justify-between gap-4">
                    <div>
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">Lista pessoal</p>
                        <h1 className="text-3xl font-black uppercase tracking-tight text-slate-900 md:text-4xl">Favoritos</h1>
                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">
                        <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                        <span className="text-sm font-bold text-slate-700">{favorites.length} itens</span>
                    </div>
                </div>

                {favorites.length > 0 ? (
                    <section className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                        {favorites.map((item) => (
                            <HighlightCard
                                key={item.id}
                                id={item.id}
                                title={item.titulo}
                                image={item.img}
                                rating={item.rating}
                            />
                        ))}
                    </section>
                ) : (
                    <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
                        <p className="text-lg font-black uppercase tracking-wide text-slate-900">Nenhum favorito ainda</p>
                        <p className="mt-2 text-sm text-slate-600">Clique no coração dos produtos para salvar seus destaques preferidos.</p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
