import React from 'react';

export function StoreCard({ name }) {
    return (
        <div className="bg-[#F6E8D0] p-4 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-16 h-16 bg-red-400/20 rounded-xl flex items-center justify-center mb-3">
                <span className="text-3xl">🏠</span>
            </div>
            <p className="font-bold text-xs text-slate-800 truncate w-full">
                {name}
            </p>
        </div>
    );
}