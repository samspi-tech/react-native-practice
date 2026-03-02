import { ActivityIndicator, StyleSheet } from 'react-native';

import ThemedView from './ThemedView';
import { useTheme } from '../hooks/useTheme';

const ThemedLoader = () => {
    const theme = useTheme();

    return (
        <ThemedView style={styles.container}>
            <ActivityIndicator color={theme.text} size="large" />
        </ThemedView>
    );
};

export default ThemedLoader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
