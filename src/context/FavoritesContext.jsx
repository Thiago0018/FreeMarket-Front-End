import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
    const [favoriteIds, setFavoriteIds] = useState(() => {
        try {
            const stored = localStorage.getItem('freemarket-favorites');
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('freemarket-favorites', JSON.stringify(favoriteIds));
    }, [favoriteIds]);

    const toggleFavorite = (id) => {
        setFavoriteIds((current) =>
            current.includes(id)
                ? current.filter((favoriteId) => favoriteId !== id)
                : [...current, id]
        );
    };

    const isFavorite = (id) => favoriteIds.includes(id);

    const value = useMemo(
        () => ({ favoriteIds, toggleFavorite, isFavorite }),
        [favoriteIds]
    );

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
    const context = useContext(FavoritesContext);

    if (!context) {
        throw new Error('useFavorites must be used inside a FavoritesProvider');
    }

    return context;
}
