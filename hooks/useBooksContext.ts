import { useContext } from 'react';

import { BooksContext } from '../contexts/BooksContext';

export const useBooksContext = () => {
    const context = useContext(BooksContext);

    if (!context) {
        throw Error('useBooksContext must be used within BooksProvider');
    }

    return context;
};
