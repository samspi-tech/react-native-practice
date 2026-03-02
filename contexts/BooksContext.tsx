import { createContext, PropsWithChildren, useState } from 'react';
import { ID } from 'react-native-appwrite';

import { Book } from '../types/types';
import { tabledDB } from '../lib/appwrite';
import { useUserContext } from '../hooks/useUserContext';

interface BooksContextValues {
    books: Book[];
    getAllBooks: () => Promise<void>;
    getSingleBook: () => Promise<void>;
    createBook: (payload: Book) => Promise<void>;
    deleteBook: () => Promise<void>;
}

export const BooksContext = createContext<BooksContextValues | null>(null);

export const BooksProvider = ({ children }: PropsWithChildren) => {
    const { user } = useUserContext();
    const [books, setBooks] = useState<Book[]>([]);

    const getAllBooks = async () => {};

    const getSingleBook = async () => {};

    const createBook = async (payload: Book) => {
        if (!user) {
            throw new Error('No user is logged in');
        }

        try {
            await tabledDB.createRow({
                databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!,
                tableId: process.env.EXPO_PUBLIC_APPWRITE_BOOKS_TABLE_ID!,
                rowId: ID.unique(),
                data: {
                    ...payload,
                    userId: user.$id,
                },
            });
        } catch (err) {
            if (err instanceof Error) {
                console.log(err.message);
            }
        }
    };

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
