import { createContext, PropsWithChildren, useState } from 'react';

interface UserCredentials {
    email: string;
    password: string;
}

interface UserContextValues {
    user: [] | null;
    handleLogin: ({ email, password }: UserCredentials) => void;
    handleRegister: ({ email, password }: UserCredentials) => void;
    handleLogout: () => void;
}

export const UserContext = createContext<UserContextValues | null>(null);

export const UserProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<[] | null>(null);

    const handleLogin = ({ email, password }: UserCredentials) => {
        console.log('current user', user);
    };

    const handleRegister = ({ email, password }: UserCredentials) => {};

    const handleLogout = () => {};

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
