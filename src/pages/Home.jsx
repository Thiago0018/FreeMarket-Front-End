import React, { useState } from 'react';
import {
    Search,
    ChevronLeft,
    ChevronRight,
    ShoppingBag,
    Shirt,
    Home as HomeIcon,
    Wrench,
    Palette
} from 'lucide-react';

// Importação dos componentes isolados
import { Navbar } from '../components/global/Navbar';
import { Footer } from '../components/global/Footer';
import { HighlightCard } from '../components/global/HighlightCard';
import { StoreCard } from '../components/home/StoreCard';
import { CategoryCard } from '../components/home/CategoryCard';

export function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    // Mocks de dados
    const destaques = [
        { id: 1, titulo: 'Artigo de Couro', rating: 5, img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80' },
        { id: 2, titulo: 'Doce Caseiro', rating: 5, img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80' },
        { id: 3, titulo: 'Café Artesanal', rating: 5, img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80' },
        { id: 4, titulo: 'Cerveja Local', rating: 5, img: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80' },
    ];

    const categorias = [
        { id: 'mercado', nome: 'Mercado', icon: ShoppingBag },
        { id: 'moda', nome: 'Moda', icon: Shirt },
        { id: 'casa', nome: 'Casa', icon: HomeIcon },
        { id: 'artesanato', nome: 'Artesanato', icon: Palette },
        { id: 'servicos', nome: 'Serviços', icon: Wrench },
    ];

    return (
        <div className="min-h-screen bg-[#FDF8EE] text-slate-800 font-sans flex flex-col justify-between">

            {/* Navbar Global */}
            <Navbar />

            {/* Hero Banner */}
            <section className="bg-[#123035] text-white pt-8 pb-16 px-6 md:px-12 relative">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2">
                            MERCADINHO REGIONAL
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 font-medium">
                            - A Sua Loja Online Flexível
                        </p>
                    </div>

                    <div className="flex justify-center md:justify-end">
                        <div className="bg-[#1B434A] rounded-2xl p-6 border border-emerald-500/20 shadow-2xl flex items-center gap-4">
                            <div className="text-center">
                                <span className="text-4xl">🏪</span>
                                <p className="text-xs text-emerald-300 font-semibold mt-1">Produtor Local</p>
                            </div>
                            <div className="text-center">
                                <span className="text-4xl">🤝</span>
                                <p className="text-xs text-emerald-300 font-semibold mt-1">Troca & Venda</p>
                            </div>
                            <div className="text-center">
                                <span className="text-4xl">🥕</span>
                                <p className="text-xs text-emerald-300 font-semibold mt-1">Sem Intermediários</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Busca */}
                <div className="max-w-4xl mx-auto mt-10">
                    <div className="relative flex items-center">
                        <Search className="absolute left-4 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Buscar produtos e lojas..."
                            className="w-full pl-12 pr-6 py-3.5 bg-white text-slate-800 placeholder-slate-400 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm md:text-base"
                        />
                    </div>
                </div>
            </section>

            {/* Conteúdo Principal */}
            <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-16 w-full">

                {/* Destaques Locais */}
                <section>
                    <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-6 tracking-wide uppercase">
                        Destaques Locais
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {destaques.map((item) => (
                            <HighlightCard
                                key={item.id}
                                id={item.id}
                                title={item.titulo}
                                image={item.img}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </section>

                {/* Lojas do Bairro */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-wide uppercase">
                            Lojas do seu Bairro
                        </h2>
                        <div className="flex gap-2">
                            <button className="p-1.5 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-800 transition-colors">
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button className="p-1.5 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-800 transition-colors">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[1, 2, 3, 4, 5].map((index) => (
                            <StoreCard key={index} name="Lojas do Seu Bair..." />
                        ))}
                    </div>
                </section>

                {/* Categorias */}
                <section>
                    <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-6 tracking-wide uppercase">
                        Categorias
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {categorias.map((cat) => (
                            <CategoryCard
                                key={cat.id}
                                title={cat.nome}
                                icon={cat.icon}
                            />
                        ))}
                    </div>
                </section>

            </main>

            {/* Footer Global */}
            <Footer />

        </div>
    );
}
