import React, { useMemo } from 'react';
import { Search } from 'lucide-react';
import { searchCatalog } from '../../data/searchCatalog';

export function SearchSuggestions({ query, onSelect }) {
    const suggestions = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        if (!normalizedQuery) {
            return [];
        }

        return searchCatalog
            .filter((item) => {
                const label = item.label.toLowerCase();
                const category = item.category.toLowerCase();
                return label.includes(normalizedQuery) || category.includes(normalizedQuery);
            })
            .slice(0, 6);
    }, [query]);

    if (!query.trim() || suggestions.length === 0) {
        return null;
    }

    return (
        <ul className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
            {suggestions.map((item) => (
                <li key={`${item.label}-${item.category}`}>
                    <button
                        type="button"
                        onClick={() => onSelect(item.label)}
                        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-emerald-50"
                    >
                        <span className="flex items-center gap-3">
                            <Search className="h-4 w-4 text-slate-400" />
                            <span>
                                <span className="block text-sm font-semibold text-slate-800">{item.label}</span>
                                <span className="block text-[10px] uppercase tracking-wide text-slate-500">{item.category}</span>
                            </span>
                        </span>
                    </button>
                </li>
            ))}
        </ul>
    );
}
