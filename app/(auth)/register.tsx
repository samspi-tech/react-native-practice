import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

import ThemedView from '../../components/ThemedView';
import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';
import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';
import { useUserContext } from '../../hooks/useUserContext';
import ErrorMessage from '../../components/ErrorMessage';

interface ErrorMessages {
    email?: string;
    password?: string;
}

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<ErrorMessages | null>(null);

    const { handleRegister } = useUserContext();

    const handleSubmit = async () => {
        setError(null);
        try {
            await handleRegister({ email, password });

            setEmail('');
            setPassword('');
            Keyboard.dismiss();
        } catch (err) {
            if (err instanceof Error) {
                switch (true) {
                    case err.message.includes('email'): {
                        return setError({ email: err.message });
                    }
                    case err.message.includes('password'): {
                        return setError({ password: err.message });
                    }
                }
            }
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                <Spacer />
                <ThemedText isTitle={true} style={styles.title}>
                    Register For an Account
                </ThemedText>

                <ThemedTextInput
                    style={{ width: '80%', marginBottom: 20 }}
                    placeholder="Email"
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    value={email}
                />
                {error?.email && (
                    <ErrorMessage style={{ width: '80%', marginBottom: 20 }}>
                        Please provide a valid email address.
                    </ErrorMessage>
                )}

                <ThemedTextInput
                    style={{ width: '80%', marginBottom: 20 }}
                    placeholder="Password"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />
                {error?.password && (
                    <ErrorMessage style={{ width: '80%', marginBottom: 20 }}>
                        Password must be between 8 and 265 characther long, and
                        should not be one of the commonly used password.
                    </ErrorMessage>
                )}

                <ThemedButton
                    style={{ width: '80%' }}
                    onPress={handleSubmit}
                    text="Register"
                />

                <Spacer height={100} />
                <Link href="/login">
                    <ThemedText style={{ textAlign: 'center' }}>
                        Login instead
                    </ThemedText>
                </Link>
            </ThemedView>
        </TouchableWithoutFeedback>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30,
    },
});
