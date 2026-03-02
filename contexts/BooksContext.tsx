import { createContext, PropsWithChildren, useState } from 'react';

import { Book } from '../types/types';

interface BooksContextValues {
    books: Book[];
    getAllBooks: () => Promise<void>;
    getSingleBook: () => Promise<void>;
    createBook: () => Promise<void>;
    deleteBook: () => Promise<void>;
}

export const BooksContext = createContext<BooksContextValues | null>(null);

export const BooksProvider = ({ children }: PropsWithChildren) => {
    const [books, setBooks] = useState<Book[]>([]);

    const getAllBooks = async () => {};

    const getSingleBook = async () => {};

    const createBook = async () => {};

    const deleteBook = async () => {};

    return (
        <BooksContext.Provider
            value={{
                books,
                getAllBooks,
                getSingleBook,
                createBook,
                deleteBook,
            }}
        >
            {children}
        </BooksContext.Provider>
    );
};
