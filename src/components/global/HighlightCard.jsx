import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

export function HighlightCard({ id, title, image, rating, onClick }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (onClick) onClick();
        navigate(`/produto/${id}`);
    };

    return (
        <div
            className="flex flex-col items-start group cursor-pointer"
            onClick={handleClick}
            onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    handleClick();
                }
            }}
            role="button"
            tabIndex={0}
        >
            <div className="w-full h-48 rounded-2xl overflow-hidden bg-slate-200 mb-3 shadow-sm">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <h3 className="font-bold text-slate-900 text-base md:text-lg mb-1">{title}</h3>

            <div className="flex gap-1 text-amber-400 mb-2">
                {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
            </div>

            <button
                type="button"
                className="text-xs font-black tracking-wider text-slate-900 border-b-2 border-slate-900 pb-0.5 hover:text-emerald-700 hover:border-emerald-700 transition-colors"
            >
                VER LOJA
            </button>
        </div>
    );
}