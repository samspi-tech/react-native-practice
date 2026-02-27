import { createContext, PropsWithChildren, useState } from 'react';
import { ID, Models } from 'react-native-appwrite';

import { account } from '../lib/appwrite';

type User = Models.User<Models.Preferences>;

interface UserCredentials {
    email: string;
    password: string;
}

interface UserContextValues {
    user: User | null;
    handleLogin: ({ email, password }: UserCredentials) => Promise<void>;
    handleRegister: ({ email, password }: UserCredentials) => Promise<void>;
    handleLogout: () => Promise<void>;
}

export const UserContext = createContext<UserContextValues | null>(null);

export const UserProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = async ({ email, password }: UserCredentials) => {
        try {
            await account.createEmailPasswordSession({
                email,
                password,
            });

            const response = await account.get();
            setUser(response);
        } catch (err) {
            if (err instanceof Error) {
                throw Error(err.message);
            }
        }
    };

    const handleRegister = async ({ email, password }: UserCredentials) => {
        try {
            await account.create({
                userId: ID.unique(),
                email: email.trim(),
                password,
            });
            await handleLogin({ email, password });

            const response = await account.get();
            setUser(response);
        } catch (err) {
            if (err instanceof Error) {
                throw Error(err.message);
            }
        }
    };

    const handleLogout = async () => {
        await account.deleteSession({ sessionId: 'current' });
        setUser(null);
    };

    return (
        <UserContext.Provider
            value={{
                handleLogin,
                handleRegister,
                handleLogout,
                user,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
