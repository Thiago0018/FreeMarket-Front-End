import React, { useState } from 'react';
import { Sliders } from 'lucide-react';

export function PriceFilter({ minPrice = 0, maxPrice = 500, onPriceChange }) {
    const [localMin, setLocalMin] = useState(minPrice);
    const [localMax, setLocalMax] = useState(maxPrice);

    const handleMinChange = (e) => {
        const value = parseFloat(e.target.value);
        if (value <= localMax) {
            setLocalMin(value);
            onPriceChange({ min: value, max: localMax });
        }
    };

    const handleMaxChange = (e) => {
        const value = parseFloat(e.target.value);
        if (value >= localMin) {
            setLocalMax(value);
            onPriceChange({ min: localMin, max: value });
        }
    };

    const handleReset = () => {
        setLocalMin(minPrice);
        setLocalMax(maxPrice);
        onPriceChange({ min: minPrice, max: maxPrice });
    };

    return (
        <div className="bg-[#F6E8D0] rounded-3xl p-5 shadow-sm border border-orange-100">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Sliders className="w-5 h-5 text-slate-700" />
                    <h3 className="text-sm font-black uppercase tracking-wider text-slate-900">
                        Filtro de Preço
                    </h3>
                </div>
                <button
                    type="button"
                    onClick={handleReset}
                    className="text-[10px] font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                    Resetar
                </button>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2">
                        Mín: R$ {localMin.toFixed(2)}
                    </label>
                    <input
                        type="range"
                        min={minPrice}
                        max={maxPrice}
                        step="5"
                        value={localMin}
                        onChange={handleMinChange}
                        className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                </div>

                <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2">
                        Máx: R$ {localMax.toFixed(2)}
                    </label>
                    <input
                        type="range"
                        min={minPrice}
                        max={maxPrice}
                        step="5"
                        value={localMax}
                        onChange={handleMaxChange}
                        className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                </div>

                <div className="bg-white rounded-2xl px-3 py-2 text-center border border-slate-200">
                    <p className="text-xs font-bold text-slate-900">
                        R$ {localMin.toFixed(2)} - R$ {localMax.toFixed(2)}
                    </p>
                </div>
            </div>
        </div>
    );
}
