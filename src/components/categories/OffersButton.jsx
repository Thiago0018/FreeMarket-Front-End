import React from 'react';
import { Zap } from 'lucide-react';

export function OffersButton({ onOffersClick, isActive = false }) {
    return (
        <button
            type="button"
            onClick={onOffersClick}
            className={`w-full rounded-3xl px-4 py-3.5 font-black uppercase tracking-wider transition-all text-sm flex items-center justify-center gap-2 ${isActive
                ? 'bg-red-500 text-white shadow-lg scale-105'
                : 'bg-gradient-to-r from-orange-400 to-red-400 text-white hover:shadow-md'
                }`}
        >
            <Zap className="w-5 h-5 fill-current" />
            <span>Ver Ofertas</span>
        </button>
    );
}
