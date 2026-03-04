import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { ID } from 'react-native-appwrite';

import { account } from '../lib/appwrite';
import { User, UserCredentials } from '../types/types';

interface UserContextValues {
    user: User | null;
    isAuthChecked: boolean;
    handleLogin: ({ email, password }: UserCredentials) => Promise<void>;
    handleRegister: ({ email, password }: UserCredentials) => Promise<void>;
    handleLogout: () => Promise<void>;
}

export const UserContext = createContext<UserContextValues | null>(null);

export const UserProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthChecked, setIsAuthChecked] = useState(false);

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

    useEffect(() => {
        if (isAuthChecked) {
            return;
        }

        const getInitialUserValue = async () => {
            try {
                const response = await account.get();
                setUser(response);
            } catch (err) {
                setUser(null);
            } finally {
                setIsAuthChecked(true);
            }
        };
        getInitialUserValue();
    }, []);

    return (
        <UserContext.Provider
            value={{
                handleLogin,
                handleRegister,
                handleLogout,
                user,
                isAuthChecked,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
