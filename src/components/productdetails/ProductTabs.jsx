import React, { useState } from 'react';
import { Star } from 'lucide-react';

export function ProductTabs({ detailsText, reviews }) {
    const [activeTab, setActiveTab] = useState('details');

    return (
        <div className="mt-12 border-t border-slate-200/60 pt-6">
            {/* Cabeçalho das Abas */}
            <div className="flex gap-8 border-b border-slate-200 pb-2 mb-6 text-base font-bold">
                <button
                    onClick={() => setActiveTab('details')}
                    className={`pb-2 transition-colors ${activeTab === 'details'
                            ? 'text-slate-900 border-b-2 border-orange-500'
                            : 'text-slate-400 hover:text-slate-600'
                        }`}
                >
                    Details
                </button>
                <button
                    onClick={() => setActiveTab('reviews')}
                    className={`pb-2 transition-colors ${activeTab === 'reviews'
                            ? 'text-slate-900 border-b-2 border-orange-500'
                            : 'text-slate-400 hover:text-slate-600'
                        }`}
                >
                    Reviews
                </button>
            </div>

            {/* Conteúdo da Aba */}
            {activeTab === 'details' ? (
                <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
                    <div className="flex items-center gap-1 text-amber-400 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400" />
                        ))}
                    </div>
                    <p>{detailsText}</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {reviews.map((rev) => (
                        <div key={rev.id} className="bg-white/60 p-4 rounded-xl border border-slate-100 shadow-sm">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-bold text-slate-800 text-sm">{rev.author}</span>
                                <div className="flex text-amber-400">
                                    {[...Array(rev.rating)].map((_, i) => (
                                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-slate-600 text-sm">{rev.comment}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}