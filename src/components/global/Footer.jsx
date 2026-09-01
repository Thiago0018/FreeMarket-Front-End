import React from 'react';
import { MapPin, Globe, Mail, MessageCircle } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-[#123035] text-white pt-12 pb-8 px-6 md:px-12 mt-12 border-t border-emerald-900">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-xs">

                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-red-500 fill-red-500" />
                        <div className="flex flex-col leading-none">
                            <span className="font-extrabold text-base tracking-wider text-white">MERCADINHO</span>
                            <span className="font-bold text-xs tracking-widest text-slate-200">REGIONAL</span>
                        </div>
                    </div>
                    <p className="text-slate-300 font-semibold tracking-wider pt-2">
                        SEU COMÉRCIO, SUA LOJA
                    </p>
                </div>

                <div className="space-y-2 text-slate-300">
                    <p className="hover:text-white cursor-pointer">Home</p>
                    <p className="hover:text-white cursor-pointer">Mercado</p>
                    <p className="hover:text-white cursor-pointer">Casa</p>
                    <p className="hover:text-white cursor-pointer">Artesanato</p>
                </div>

                <div className="space-y-2 text-slate-300">
                    <p className="hover:text-white cursor-pointer">Moda</p>
                    <p className="hover:text-white cursor-pointer">Casa</p>
                    <p className="hover:text-white cursor-pointer">Artesanato</p>
                    <p className="hover:text-white cursor-pointer">Serviços</p>
                </div>

                <div className="space-y-3">
                    <p className="font-bold text-slate-200 text-sm">Footer</p>
                    <div className="flex gap-3 text-white">
                        <a href="#" className="p-2 bg-emerald-900/50 rounded-full hover:bg-emerald-800 transition-colors">
                            <Globe className="w-4 h-4" />
                        </a>
                        <a href="#" className="p-2 bg-emerald-900/50 rounded-full hover:bg-emerald-800 transition-colors">
                            <Mail className="w-4 h-4" />
                        </a>
                        <a href="#" className="p-2 bg-emerald-900/50 rounded-full hover:bg-emerald-800 transition-colors">
                            <MessageCircle className="w-4 h-4" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}