import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';

export function HighlightCard({ id, title, image, rating, onClick }) {
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);

    const handleClick = () => {
        if (onClick) onClick();
        navigate(`/produto/${id}`);
    };

    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        setIsFavorite(!isFavorite);
    };

    return (
        <div
            className="flex h-full flex-col items-start group cursor-pointer rounded-3xl bg-white p-3 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
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
            <div className="w-full aspect-square overflow-hidden rounded-2xl bg-slate-200 mb-3 shadow-sm relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                    type="button"
                    onClick={handleFavoriteClick}
                    className="absolute top-2 right-2 p-1.5 bg-white/80 hover:bg-white rounded-full transition-colors shadow-sm"
                    aria-label="Adicionar aos favoritos"
                >
                    <Heart
                        className={`w-4 h-4 transition-colors ${
                            isFavorite
                                ? 'fill-red-500 text-red-500'
                                : 'text-white stroke-white fill-none'
                        }`}
                    />
                </button>
            </div>
            <h3 className="font-bold text-slate-900 text-sm md:text-base mb-1 line-clamp-2">{title}</h3>

            <div className="flex gap-1 text-amber-400 mb-2">
                {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
            </div>

            <button
                type="button"
                className="text-[10px] md:text-xs font-black tracking-wider text-slate-900 border-b-2 border-slate-900 pb-0.5 hover:text-emerald-700 hover:border-emerald-700 transition-colors"
            >
                VER PRODUTO
            </button>
        </div>
    );
}