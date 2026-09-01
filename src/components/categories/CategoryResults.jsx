import React from 'react';
import { ChevronRight } from 'lucide-react';
import { HighlightCard } from '../global/HighlightCard';

export function CategoryResults({ filteredProducts, activeFilter }) {
    return (
        <div className="flex-1">
            <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
                <div>
                    <h2 className="text-xl md:text-2xl font-black tracking-wide uppercase text-slate-900">
                        {activeFilter === 'Tudo' ? 'Todos os Produtos' : activeFilter}
                    </h2>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="font-semibold">{filteredProducts.length} itens</span>
                    <ChevronRight className="w-4 h-4" />
                </div>
            </div>

            <section className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((item) => (
                    <div key={item.id} className="aspect-square">
                        <HighlightCard
                            id={item.id}
                            title={item.titulo}
                            image={item.img}
                            rating={item.rating}
                        />
                    </div>
                ))}
            </section>

            {filteredProducts.length === 0 && (
                <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-[#F6E8D0] p-10 text-center">
                    <p className="text-lg font-black uppercase tracking-wide text-slate-800">
                        Nenhum produto encontrado
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                        Tente outra busca ou selecione outra categoria.
                    </p>
                </div>
            )}
        </div>
    );
}
