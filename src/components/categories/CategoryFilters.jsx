import React from 'react';
import { PriceFilter } from './PriceFilter';
import { OffersButton } from './OffersButton';
import { CategorySidebar } from './CategorySidebar';

export function CategoryFilters({
    categoryOptionsWithAll,
    activeFilter,
    onFilterChange,
    onPriceChange,
    isOfferActive,
    onOffersClick,
}) {
    return (
        <aside className="w-full md:w-72 flex-shrink-0 space-y-4">
            <OffersButton onOffersClick={onOffersClick} isActive={isOfferActive} />

            <PriceFilter minPrice={0} maxPrice={500} onPriceChange={onPriceChange} />

            <CategorySidebar
                categoryOptionsWithAll={categoryOptionsWithAll}
                activeFilter={activeFilter}
                onFilterChange={onFilterChange}
            />
        </aside>
    );
}
