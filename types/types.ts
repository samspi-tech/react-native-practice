import { Models } from 'react-native-appwrite';

export type User = Models.User<Models.Preferences>;

export type UserCredentials = {
    email: string;
    password: string;
};

export type Book = {
    id: string;
    title: string;
    author: string;
    description: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
};
