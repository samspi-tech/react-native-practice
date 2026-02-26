import { useState } from 'react';
import { Keyboard } from 'react-native';

export const useAuth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isEmptyValue = email.trim() === '' && password.trim() === '';

    const handleLogin = () => {
        if (isEmptyValue) {
            return console.log('Please enter valid email and password');
        }

        console.log('login form submitted', email, password);

        setEmail('');
        setPassword('');
        Keyboard.dismiss();
    };

    const handleRegister = () => {
        if (isEmptyValue) {
            return console.log('Please enter valid email and password');
        }

        console.log('register form submitted', email, password);

        setEmail('');
        setPassword('');
        Keyboard.dismiss();
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleRegister,
    };
};
