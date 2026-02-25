import { StyleSheet } from 'react-native';

import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';

const CreateBook = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText isTitle={true} style={styles.heading}>
                Add a New Book
            </ThemedText>
            <Spacer />
        </ThemedView>
    );
};

export default CreateBook;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
});
