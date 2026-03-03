import { Models } from 'react-native-appwrite';

export type User = Models.User<Models.Preferences>;

export type UserCredentials = {
    email: string;
    password: string;
};

export type BookPayload = {
    title: string;
    author: string;
    description: string;
};

export type Book = {
    userId: string;
} & BookPayload &
    Models.Row;
