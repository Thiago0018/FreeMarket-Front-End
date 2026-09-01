import React, { useState } from 'react';
import { Heart } from 'lucide-react';

export function ProductGallery({ images }) {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="flex flex-col items-center">
            {/* Imagem Principal */}
            <div className="relative w-full aspect-square max-w-md bg-[#F5E6D3] rounded-3xl p-6 flex items-center justify-center shadow-sm">
                <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-red-500 transition-colors">
                    <Heart className="w-5 h-5 fill-red-500" />
                </button>
                <img
                    src={selectedImage}
                    alt="Produto"
                    className="max-h-full object-contain rounded-xl"
                />
            </div>

            {/* Carrossel de Thumbnails */}
            <div className="flex gap-3 mt-4 overflow-x-auto pb-2 w-full justify-start md:justify-center">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedImage(img)}
                        className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all bg-[#F5E6D3] flex-shrink-0 ${selectedImage === img ? 'border-orange-500 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                            }`}
                    >
                        <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>
        </div>
    );
}