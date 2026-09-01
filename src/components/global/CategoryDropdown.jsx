import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { categoryOptions } from '../../data/categories';

export function CategoryDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelectCategory = (categoryId) => {
        setIsOpen(false);
        navigate(`/categorias?tipo=${categoryId}`);
    };

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 text-slate-200 hover:text-emerald-400 transition-colors pb-1 text-sm font-medium focus:outline-none"
            >
                <span>Categorias</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-400' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50">
                    <div className="px-3 py-1 border-b border-slate-100 mb-1">
                        <span className="text-[10px] font-black tracking-wider text-slate-400 uppercase">
                            Selecione uma Categoria
                        </span>
                    </div>

                    <div className="max-h-60 overflow-y-auto">
                        {categoryOptions.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => handleSelectCategory(category.id)}
                                className="w-full text-left px-4 py-2 text-xs font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors flex items-center justify-between"
                            >
                                <span>{category.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}