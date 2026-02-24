import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import ThemedText from '../components/ThemedText';
import ThemedView from '../components/ThemedView';

const About = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>About Page</ThemedText>

            <Link href="/" style={styles.link}>
                <ThemedText>Back Home</ThemedText>
            </Link>
        </ThemedView>
    );
};

export default About;

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
        marginVertical: 10,
        borderBottomWidth: 1,
    },
});
