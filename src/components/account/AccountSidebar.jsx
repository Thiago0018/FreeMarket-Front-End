import React from 'react';
import {
    Package,
    User,
    MapPin,
    CreditCard,
    Heart,
    LogOut
} from 'lucide-react';

export function AccountSidebar({ activeTab, setActiveTab }) {
    const menuItems = [
        { id: 'pedidos', label: 'Meus Pedidos', icon: Package },
        { id: 'detalhes', label: 'Detalhes da Conta', icon: User },
        { id: 'enderecos', label: 'Endereços', icon: MapPin },
        { id: 'pagamento', label: 'Métodos de Pagamento', icon: CreditCard },
        { id: 'favoritos', label: 'Favoritos', icon: Heart },
    ];

    return (
        <aside className="w-full md:w-64 bg-[#F6E8D0] rounded-3xl p-4 flex flex-col justify-between shadow-sm">
            <nav className="space-y-1">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-black tracking-wide transition-all ${isActive
                                    ? 'bg-[#123035] text-white shadow-md'
                                    : 'text-slate-800 hover:bg-orange-200/60'
                                }`}
                        >
                            <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-700'}`} />
                            <span>{item.label}</span>
                        </button>
                    );
                })}
            </nav>

            {/* Botão de Logout */}
            <div className="pt-4 border-t border-slate-300/60 mt-6">
                <button
                    onClick={() => alert('Sessão encerrada!')}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-black text-red-600 hover:bg-red-100/60 transition-all"
                >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
}