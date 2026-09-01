import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Star } from 'lucide-react';

// Reutilizando Navbar e Footer globais
import { Navbar } from '../components/global/Navbar';
import { Footer } from '../components/global/Footer';

// Componentes isolados da página
import { ProductGallery } from '../components/productdetails/ProductGallery';
import { ProductTabs } from '../components/productdetails/ProductTabs';

export default function ProductDetails() {
    const navigate = useNavigate();
    const { id } = useParams(); // Para carregar o produto dinamicamente via back-end futuramente

    // Dados Mockados fiéis à foto do produto
    const product = {
        title: 'CAFÉ ARTESANAL DA SERRA - 500g',
        rating: 4.9,
        price: 49.90,
        seller: 'Café Do Ponto',
        description: 'Café gourmet 100% Arábica cultivado por pequenos produtores locais. Notas sensoriais marcantes e torra artesanal fresca para preservar o aroma natural da serra.',
        images: [
            'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80',
            'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&q=80',
            'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&q=80',
            'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=300&q=80',
        ],
        reviews: [
            { id: 1, author: 'Eomonto sentihi', rating: 5, comment: 'Excelente produto local! Chegou super fresco.' }
        ]
    };

    const handleBuyNow = () => {
        // Redireciona para simulação do Mercado Pago ou Checkout
        navigate(`/checkout/${id || 1}`);
    };

    return (
        <div className="min-h-screen bg-[#FDF8EE] text-slate-800 font-sans flex flex-col justify-between">

            {/* Navbar Global */}
            <Navbar />

            {/* Conteúdo do Checkout / Detalhes */}
            <main className="max-w-6xl mx-auto px-6 md:px-12 py-10 w-full flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Lado Esquerdo: Galeria de Imagens */}
                    <ProductGallery images={product.images} />

                    {/* Lado Direito: Informações de Compra */}
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            {/* Título do Produto */}
                            <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase mb-2">
                                {product.title}
                            </h1>

                            {/* Avaliação */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex text-amber-400 gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                                    ))}
                                </div>
                                <span className="text-xs font-bold text-slate-600">{product.rating}</span>
                            </div>

                            {/* Preço */}
                            <div className="text-3xl font-black text-slate-900 mb-4">
                                R$ {product.price.toFixed(2).replace('.', ',')}
                            </div>

                            {/* Descrição Curta */}
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                                {product.description}
                            </p>

                            {/* Produtor / Vendedor */}
                            <div className="text-sm font-semibold text-slate-800 mb-8">
                                Vendido por: <span className="font-bold text-slate-900">{product.seller}</span>
                            </div>
                        </div>

                        {/* Botões de Ação (Estilo Coral / Laranja) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <button
                                type="button"
                                className="w-full bg-[#EE6D52] hover:bg-[#d95a40] text-white font-extrabold text-xs md:text-sm tracking-wider uppercase py-4 px-6 rounded-2xl shadow-md transition-all active:scale-95"
                            >
                                Adicionar ao Carrinho
                            </button>

                            <button
                                type="button"
                                onClick={handleBuyNow}
                                className="w-full bg-[#EE6D52] hover:bg-[#d95a40] text-white font-extrabold text-xs md:text-sm tracking-wider uppercase py-4 px-6 rounded-2xl shadow-md transition-all active:scale-95"
                            >
                                Comprar Agora
                            </button>
                        </div>
                    </div>

                </div>

                {/* Seção Inferior: Abas de Detalhes e Avaliações */}
                <ProductTabs
                    detailsText={product.description}
                    reviews={product.reviews}
                />
            </main>

            {/* Footer Global */}
            <Footer />

        </div>
    );
}