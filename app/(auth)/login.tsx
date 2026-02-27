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

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>('');

    const { handleLogin } = useUserContext();

    const handleSubmit = async () => {
        setError('');
        try {
            await handleLogin({ email, password });

            setEmail('');
            setPassword('');
            Keyboard.dismiss();
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            }
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                <Spacer />
                <ThemedText isTitle={true} style={styles.title}>
                    Login to Your Account
                </ThemedText>

                <ThemedTextInput
                    style={{ width: '80%', marginBottom: 20 }}
                    placeholder="Email"
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    value={email}
                />
                <ThemedTextInput
                    style={{ width: '80%', marginBottom: 20 }}
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
                        <Spacer />
                        <ErrorMessage style={{ width: '80%' }}>
                            {error}
                        </ErrorMessage>
                    </>
                )}

                <Spacer height={100} />
                <Link href="/register">
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
