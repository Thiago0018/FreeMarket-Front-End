import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/global/Navbar';
import { Footer } from '../components/global/Footer';
import { CartItem } from '../components/cart/CartItem';

export default function Cart() {
    const navigate = useNavigate();

    // Estado local simulando os itens vindos da foto
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            title: 'Café Artesanal da Serra (500g)',
            price: 49.90,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=200&q=80',
        },
        {
            id: 2,
            title: 'Mel Local (300g)',
            price: 35.00,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=200&q=80',
        },
    ]);

    const [coupon, setCoupon] = useState('');
    const shippingFee = 12.00;

    // Lógica de alterar quantidade
    const handleQuantityChange = (id, delta) => {
        setCartItems(prev =>
            prev.map(item => {
                if (item.id === id) {
                    const newQty = item.quantity + delta;
                    return newQty > 0 ? { ...item, quantity: newQty } : item;
                }
                return item;
            })
        );
    };

    // Lógica de remover item
    const handleRemoveItem = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    // Cálculos financeiros
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const total = subtotal > 0 ? subtotal + shippingFee : 0;
    const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const handleCheckout = () => {
        // Redireciona para simulação do checkout com Mercado Pago
        navigate('/checkout/1');
    };

    return (
        <div className="min-h-screen bg-[#FDF8EE] text-slate-800 font-sans flex flex-col justify-between">

            {/* Navbar Global com o contador dinâmico */}
            <Navbar cartCount={totalItemsCount} />

            {/* Conteúdo Principal do Carrinho */}
            <main className="max-w-xl mx-auto px-6 py-8 w-full flex-grow">

                {/* Título */}
                <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-wide uppercase mb-6">
                    MEU CARRINHO ({totalItemsCount} ITENS)
                </h1>

                {cartItems.length === 0 ? (
                    <div className="text-center py-12 bg-[#F6E8D0] rounded-3xl p-6">
                        <p className="text-slate-700 font-bold mb-4">Seu carrinho está vazio.</p>
                        <button
                            onClick={() => navigate('/')}
                            className="bg-[#EE6D52] text-white font-extrabold px-6 py-3 rounded-2xl uppercase text-xs tracking-wider"
                        >
                            Voltar às Compras
                        </button>
                    </div>
                ) : (
                    <div className="space-y-6">

                        {/* Lista de Itens do Carrinho */}
                        <div className="divide-y divide-slate-200">
                            {cartItems.map(item => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    onQuantityChange={handleQuantityChange}
                                    onRemove={handleRemoveItem}
                                />
                            ))}
                        </div>

                        {/* Resumo financeiro (Subtotal, Frete, Total) */}
                        <div className="pt-2 space-y-2 text-sm font-semibold text-slate-700">
                            <div className="flex justify-between items-center">
                                <span>Subtotal:</span>
                                <span className="font-extrabold text-slate-900">
                                    R$ {subtotal.toFixed(2).replace('.', ',')}
                                </span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span>Frete:</span>
                                <span className="font-extrabold text-slate-900">
                                    R$ {shippingFee.toFixed(2).replace('.', ',')}
                                </span>
                            </div>

                            <div className="flex justify-between items-center text-lg pt-2 text-slate-900">
                                <span className="font-black">Total:</span>
                                <span className="font-black text-xl">
                                    R$ {total.toFixed(2).replace('.', ',')}
                                </span>
                            </div>
                        </div>

                        {/* Endereço de Entrega (Card Bege Claro) */}
                        <div className="bg-[#F6E8D0] p-4 rounded-2xl text-xs space-y-1">
                            <p className="font-extrabold text-slate-900 text-sm mb-1">
                                Endereço de Entrega
                            </p>
                            <p className="text-slate-700 font-medium">Rua Sosao, 86</p>
                            <p className="text-slate-700 font-medium">Moncho, Peinamento 20001</p>
                        </div>

                        {/* Input de Cupom de Desconto */}
                        <div>
                            <input
                                type="text"
                                value={coupon}
                                onChange={(e) => setCoupon(e.target.value)}
                                placeholder="Cupom de Desconto"
                                className="w-full px-4 py-3 bg-white text-slate-800 placeholder-slate-400 rounded-2xl border border-dashed border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                            />
                        </div>

                        {/* Botão Finalizar Pedido (Laranja / Coral) */}
                        <button
                            type="button"
                            onClick={handleCheckout}
                            className="w-full bg-[#EE6D52] hover:bg-[#d95a40] text-white font-black tracking-wider text-sm uppercase py-4 rounded-2xl shadow-md transition-all active:scale-95 mt-4"
                        >
                            FINALIZAR PEDIDO
                        </button>

                    </div>
                )}
            </main>

            {/* Footer Global */}
            <Footer />

        </div>
    );
}