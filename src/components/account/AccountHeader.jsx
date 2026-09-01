import React from 'react';

export function AccountHeader({ user }) {
    return (
        <div className="bg-[#123035] text-white p-6 rounded-3xl flex items-center justify-between shadow-sm mb-6">
            <div className="flex items-center gap-4">
                {/* Avatar / Foto de Perfil */}
                <div className="w-16 h-16 rounded-full bg-orange-200 border-2 border-white overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Nome, Email e Membro Desde */}
                <div>
                    <h2 className="text-xl font-extrabold tracking-wide text-white">
                        {user.name}
                    </h2>
                    <p className="text-xs text-slate-300 font-medium">{user.email}</p>
                    <p className="text-[11px] text-emerald-400 mt-1">
                        Membro desde {user.memberSince}
                    </p>
                </div>
            </div>

            {/* Ilustração Representativa no Canto Superior */}
            <div className="hidden sm:flex items-center gap-2 bg-[#1B434A] px-4 py-2 rounded-2xl border border-emerald-500/20">
                <span className="text-2xl">🙋‍♂️</span>
                <span className="text-xs text-emerald-300 font-bold">Painel do Cliente</span>
            </div>
        </div>
    );
}