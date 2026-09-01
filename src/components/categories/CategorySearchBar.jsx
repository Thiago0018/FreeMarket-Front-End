import React from 'react';
import { Search } from 'lucide-react';

export function CategorySearchBar({ searchTerm, onSearchChange }) {
    return (
        <div className="max-w-4xl mx-auto mt-8">
            <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-slate-400" />
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(event) => onSearchChange(event.target.value)}
                    placeholder="Buscar por produtos e categorias..."
                    className="w-full pl-12 pr-6 py-3.5 bg-white text-slate-800 placeholder-slate-400 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm md:text-base"
                />
            </div>
        </div>
    );
}
