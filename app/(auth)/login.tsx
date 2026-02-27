import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';
import ErrorMessage from '../../components/ErrorMessage';
import { useUserContext } from '../../hooks/useUserContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { handleLogin } = useUserContext();

    const handleSubmit = async () => {
        setError('');
        try {
            await handleLogin({ email, password });

            setEmail('');
            setPassword('');
            Keyboard.dismiss();
        } catch (err) {
            setError('Invalid email or password.');
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                <ThemedText isTitle={true} style={styles.title}>
                    Login to Your Account
                </ThemedText>

                <ThemedView
                    style={{ alignItems: 'center', width: '100%', gap: 20 }}
                >
                    <ThemedTextInput
                        style={{ width: '80%' }}
                        placeholder="Email"
                        keyboardType="email-address"
                        onChangeText={setEmail}
                        value={email}
                    />
                    <ThemedTextInput
                        style={{ width: '80%' }}
                        placeholder="Password"
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry
                    />

                    <ThemedButton
                        style={{ width: '80%' }}
                        onPress={handleSubmit}
                        text="Login"
                    />

                    {error && (
                        <>
                            <ErrorMessage style={{ width: '80%' }}>
                                {error}
                            </ErrorMessage>
                        </>
                    )}
                </ThemedView>

                <Link href="/register" style={{ marginTop: 100 }}>
                    <ThemedText style={{ textAlign: 'center' }}>
                        Register instead
                    </ThemedText>
                </Link>
            </ThemedView>
        </TouchableWithoutFeedback>
    );
};

export default Login;

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
