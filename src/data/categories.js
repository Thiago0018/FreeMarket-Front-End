export const categoryOptions = [
    { id: 'cafes', label: 'Cafés' },
    { id: 'doces', label: 'Doces' },
    { id: 'bebidas', label: 'Bebidas' },
    { id: 'padaria', label: 'Padaria' },
    { id: 'laticinios', label: 'Laticínios' },
    { id: 'hortifruti', label: 'Hortifruti' },
    { id: 'cereais', label: 'Cereais' },
    { id: 'tempero', label: 'Tempero' },
];

export const categoryMap = Object.fromEntries(categoryOptions.map((item) => [item.id, item.label]));

export const categoryLookup = Object.fromEntries(categoryOptions.map((item) => [item.label, item.id]));
