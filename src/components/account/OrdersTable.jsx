import React from 'react';

export function OrdersTable({ orders }) {
    // Mapeamento das cores de status idênticas às pílulas da imagem
    const getStatusBadge = (status) => {
        switch (status) {
            case 'Em trânsito':
                return 'bg-amber-100 text-amber-800 border border-amber-300';
            case 'Entregue':
                return 'bg-emerald-100 text-emerald-800 border border-emerald-300';
            case 'Aguardando':
                return 'bg-orange-100 text-orange-800 border border-orange-300';
            default:
                return 'bg-slate-100 text-slate-800';
        }
    };

    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex-grow">
            <h2 className="text-lg font-black text-slate-900 uppercase tracking-wide mb-6">
                MEUS PEDIDOS (Últimos)
            </h2>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-slate-200 text-slate-900 font-black text-xs uppercase tracking-wider">
                            <th className="pb-3">#Pedido / Data</th>
                            <th className="pb-3 text-center">Status</th>
                            <th className="pb-3 text-right">Valor</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-800">
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-slate-50/80 transition-colors">
                                <td className="py-4 text-slate-700">{order.date}</td>

                                <td className="py-4 text-center">
                                    <span className={`px-3 py-1 rounded-full text-[11px] font-extrabold inline-block ${getStatusBadge(order.status)}`}>
                                        {order.status}
                                    </span>
                                </td>

                                <td className="py-4 text-right font-black text-slate-900 text-sm">
                                    R$ {order.total.toFixed(2).replace('.', ',')}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}