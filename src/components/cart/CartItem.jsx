import React from 'react';
import { X, Minus, Plus } from 'lucide-react';

export function CartItem({ item, onQuantityChange, onRemove }) {
    return (
        <div className="flex items-center justify-between py-4 border-b border-slate-200 gap-3">
            {/* Indicador de Multiplicador + Imagem */}
            <div className="flex items-center gap-3">
                <span className="font-extrabold text-sm text-slate-900">{item.quantity}x</span>
                <div className="w-20 h-20 bg-[#F5E6D3] rounded-2xl p-2 flex items-center justify-center flex-shrink-0">
                    <img src={item.image} alt={item.title} className="max-h-full object-contain rounded-lg" />
                </div>
            </div>

            {/* Informações, Controles e Preço */}
            <div className="flex-grow flex flex-col justify-between h-20 py-0.5">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="font-extrabold text-sm md:text-base text-slate-900 leading-tight">
                        {item.title}
                    </h3>
                    <button
                        onClick={() => onRemove(item.id)}
                        className="text-slate-400 hover:text-slate-700 transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                <div className="flex items-center justify-between mt-auto">
                    {/* Botões de + e - */}
                    <div className="flex items-center gap-3 bg-[#F5E6D3] px-2 py-1 rounded-lg">
                        <button
                            onClick={() => onQuantityChange(item.id, -1)}
                            className="text-slate-700 hover:text-slate-900 transition-colors"
                        >
                            <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-extrabold text-xs text-slate-900">{item.quantity}</span>
                        <button
                            onClick={() => onQuantityChange(item.id, 1)}
                            className="text-slate-700 hover:text-slate-900 transition-colors"
                        >
                            <Plus className="w-3.5 h-3.5" />
                        </button>
                    </div>

                    {/* Preço Unitário/Total */}
                    <span className="font-extrabold text-base text-slate-900">
                        R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                    </span>
                </div>
            </div>
        </div>
    );
}