import { StyleSheet } from 'react-native';

import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';

const Books = () => {
    return (
        <ThemedView isSafeView={true} style={styles.container}>
            <ThemedText isTitle={true} style={styles.heading}>
                Your Reading List
            </ThemedText>
        </ThemedView>
    );
};

export default Books;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 40,
    },
});
