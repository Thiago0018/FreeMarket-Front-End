import React from 'react';

export function CategoryCard({ title, icon: Icon }) {
    return (
        <div className="bg-[#F6E8D0] p-6 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer hover:bg-orange-200/50 transition-colors">
            <div className="mb-3 text-slate-800">
                <Icon className="w-8 h-8 stroke-[1.5]" />
            </div>
            <span className="font-extrabold text-sm text-slate-900">{title}</span>
        </div>
    );
}