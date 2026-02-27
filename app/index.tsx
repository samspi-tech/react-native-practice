import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import ThemedView from '../components/ThemedView';
import ThemedLogo from '../components/ThemedLogo';
import ThemedText from '../components/ThemedText';

const Home = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedView style={{ gap: 12, alignItems: 'center', padding: 24 }}>
                <ThemedLogo />

                <ThemedText style={styles.title} isTitle={true}>
                    The Number 1
                </ThemedText>

                <ThemedText>Reading List App</ThemedText>
            </ThemedView>

            <ThemedView style={{ gap: 24, alignItems: 'center', padding: 24 }}>
                <Link href="/login" style={styles.link}>
                    <ThemedText>Login Page</ThemedText>
                </Link>

                <Link href="/register" style={styles.link}>
                    <ThemedText>Register Page</ThemedText>
                </Link>

                <Link href="/profile" style={styles.link}>
                    <ThemedText>Profile Page</ThemedText>
                </Link>
            </ThemedView>
        </ThemedView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    link: {
        borderBottomWidth: 1,
    },
});
