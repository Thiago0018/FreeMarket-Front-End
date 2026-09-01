import React, { useState } from 'react';
import { Navbar } from '../components/global/Navbar';
import { Footer } from '../components/global/Footer';

import { AccountHeader } from '../components/account/AccountHeader';
import { AccountSidebar } from '../components/account/AccountSidebar';
import { OrdersTable } from '../components/account/OrdersTable';

export function Account() {
    const [activeTab, setActiveTab] = useState('pedidos');

    // Dados do usuário baseados no layout
    const user = {
        name: 'Lucas Pereira',
        email: 'email@lucaspereira.com',
        memberSince: '2023',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80',
    };

    // Pedidos idênticos aos da foto
    const orders = [
        { id: '1', date: '12/07/2023', status: 'Em trânsito', total: 145.50 },
        { id: '2', date: '12/07/2023', status: 'Entregue', total: 99.90 },
        { id: '3', date: '23/07/2023', status: 'Aguardando', total: 55.00 },
    ];

    return (
        <div className="min-h-screen bg-[#FDF8EE] text-slate-800 font-sans flex flex-col justify-between">

            {/* Navbar Global */}
            <Navbar />

            {/* Conteúdo Principal */}
            <main className="max-w-6xl mx-auto px-6 py-8 w-full flex-grow">

                {/* Cabeçalho do Perfil */}
                <AccountHeader user={user} />

                {/* Conteúdo em Duas Colunas (Menu Lateral + Conteúdo Ativo) */}
                <div className="flex flex-col md:flex-row gap-6 items-start">

                    <AccountSidebar
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />

                    {/* Renderização Condicional com base na Aba Selecionada */}
                    <div className="w-full flex-grow">
                        {activeTab === 'pedidos' && <OrdersTable orders={orders} />}

                        {activeTab === 'detalhes' && (
                            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                                <h2 className="text-lg font-black text-slate-900 uppercase tracking-wide mb-4">Detalhes da Conta</h2>
                                <p className="text-sm text-slate-600">Edite seu nome, e-mail e senha de acesso.</p>
                            </div>
                        )}

                        {activeTab === 'enderecos' && (
                            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                                <h2 className="text-lg font-black text-slate-900 uppercase tracking-wide mb-4">Meus Endereços</h2>
                                <p className="text-sm text-slate-600">Cadastre e gerencie os pontos de entrega e retirada.</p>
                            </div>
                        )}

                        {activeTab === 'pagamento' && (
                            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                                <h2 className="text-lg font-black text-slate-900 uppercase tracking-wide mb-4">Métodos de Pagamento</h2>
                                <p className="text-sm text-slate-600">Chaves Pix salvas e cartões de crédito vinculados.</p>
                            </div>
                        )}

                        {activeTab === 'favoritos' && (
                            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                                <h2 className="text-lg font-black text-slate-900 uppercase tracking-wide mb-4">Meus Favoritos</h2>
                                <p className="text-sm text-slate-600">Produtos e produtores locais salvos.</p>
                            </div>
                        )}
                    </div>

                </div>

            </main>

            {/* Footer Global */}
            <Footer />

        </div>
    );
}