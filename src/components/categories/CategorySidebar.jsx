import React from 'react';
import { ChevronRight } from 'lucide-react';

export function CategorySidebar({ categoryOptionsWithAll, activeFilter, onFilterChange }) {
    return (
        <aside className="w-full md:w-72 flex-shrink-0">
            <div className="bg-[#F6E8D0] rounded-3xl p-5 shadow-sm border border-orange-100 sticky top-6">
                <div className="flex items-center justify-between mb-5">
                    <h3 className="text-lg font-black uppercase tracking-wider text-slate-900">
                        Categorias
                    </h3>
                    <span className="text-[10px] text-slate-600 font-bold">{categoryOptionsWithAll.length - 1}</span>
                </div>

                <div className="space-y-2">
                    {categoryOptionsWithAll.map((category) => {
                        const isSelected = activeFilter === category.label;
                        return (
                            <button
                                key={category.id}
                                type="button"
                                onClick={() => onFilterChange(category.label)}
                                className={`w-full flex items-center justify-between rounded-2xl px-3 py-3 text-left text-sm font-bold transition-colors ${isSelected
                                    ? 'bg-[#123035] text-white shadow-md'
                                    : 'text-slate-800 hover:bg-orange-200/60'
                                    }`}
                            >
                                <span>{category.label}</span>
                                {category.label !== 'Tudo' && (
                                    <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-emerald-300' : 'text-slate-500'}`} />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
}
