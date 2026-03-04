import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { ID, Query } from 'react-native-appwrite';

import { Book, BookPayload } from '../types/types';
import { client, tabledDB } from '../lib/appwrite';
import { useUserContext } from '../hooks/useUserContext';

interface BooksContextValues {
    books: Book[];
    getAllBooks: () => Promise<void>;
    getSingleBook: (bookId: string) => Promise<Book>;
    createBook: (payload: BookPayload) => Promise<void>;
    deleteBook: () => Promise<void>;
}

export const BooksContext = createContext<BooksContextValues | null>(null);

export const BooksProvider = ({ children }: PropsWithChildren) => {
    const [books, setBooks] = useState<Book[]>([]);

    const { user } = useUserContext();

    const getAllBooks = async () => {
        if (!user) {
            throw new Error('No user is logged in');
        }

        try {
            const response = await tabledDB.listRows<Book>({
                databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!,
                tableId: process.env.EXPO_PUBLIC_APPWRITE_BOOKS_TABLE_ID!,
                queries: [Query.equal('userId', user.$id)],
            });
            setBooks(response.rows);
        } catch (err) {
            if (err instanceof Error) {
                console.log(err.message);
            }
        }
    };

    const getSingleBook = async (bookId: string): Promise<Book> => {
        try {
            const response = await tabledDB.getRow<Book>({
                databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!,
                tableId: process.env.EXPO_PUBLIC_APPWRITE_BOOKS_TABLE_ID!,
                rowId: bookId,
            });

            return response;
        } catch (err) {
            if (err instanceof Error) {
                console.log(err.message);
            }

            throw Error('Failed to fetch single book');
        }
    };

    const createBook = async (payload: BookPayload) => {
        if (!user) {
            throw new Error('No user is logged in');
        }

        try {
            await tabledDB.createRow<Book>({
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

    useEffect(() => {
        let unsubscribe: () => void;

        const channel = `databases.${process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID}.tables.${process.env.EXPO_PUBLIC_APPWRITE_BOOKS_TABLE_ID}.rows`;

        if (user) {
            getAllBooks();

            unsubscribe = client.subscribe(channel, (response) => {
                const { payload, events } = response;

                if (events[0].includes('create')) {
                    setBooks((prevBooks) => [...prevBooks, payload as Book]);
                }
            });
        } else {
            setBooks([]);
        }

        return () => {
            unsubscribe();
        };
    }, [user]);

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
