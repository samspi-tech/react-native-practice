import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import ThemedView from '../../components/ThemedView';
import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';
import ThemedButton from '../../components/ThemedButton';

const Login = () => {
    const handleSubmit = () => {
        console.log('login form submitted');
    };

    return (
        <ThemedView style={styles.container}>
            <Spacer />
            <ThemedText isTitle={true} style={styles.title}>
                Login to Your Account
            </ThemedText>

            <ThemedButton onPress={handleSubmit} text="Login" />

            <Spacer height={100} />
            <Link href="/register">
                <ThemedText style={{ textAlign: 'center' }}>
                    Register instead
                </ThemedText>
            </Link>
        </ThemedView>
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
