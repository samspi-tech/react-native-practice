import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import { useBooksContext } from '../../hooks/useBooksContext';
import ThemedTextInput from '../../components/ThemedTextInput';
import ThemedButton from '../../components/ThemedButton';

const CreateBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();
    const { createBook } = useBooksContext();

    const handleSubmit = async () => {
        if (!title.trim() || !author.trim() || !description.trim()) {
            return;
        }

        setIsLoading(true);
        await createBook({ title, author, description });

        setTitle('');
        setAuthor('');
        setDescription('');

        router.replace('/books');
        setIsLoading(false);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                <ThemedText isTitle={true} style={styles.heading}>
                    Add a New Book
                </ThemedText>

                <ThemedView
                    style={{ width: '80%', gap: 20, alignItems: 'center' }}
                >
                    <ThemedTextInput
                        style={styles.input}
                        placeholder="Book Title"
                        value={title}
                        onChangeText={setTitle}
                    />

                    <ThemedTextInput
                        style={styles.input}
                        placeholder="Author"
                        value={author}
                        onChangeText={setAuthor}
                    />

                    <ThemedTextInput
                        style={styles.multiline}
                        placeholder="Book Description"
                        value={description}
                        onChangeText={setDescription}
                        multiline={true}
                    />

                    <ThemedButton
                        disabled={isLoading}
                        onPress={handleSubmit}
                        style={{ width: '100%' }}
                        text={isLoading ? 'Saving...' : 'Create Book'}
                    />
                </ThemedView>
            </ThemedView>
        </TouchableWithoutFeedback>
    );
};

export default CreateBook;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 30,
    },
    input: {
        padding: 20,
        borderRadius: 6,
        alignSelf: 'stretch',
    },
    multiline: {
        padding: 20,
        borderRadius: 6,
        minHeight: 100,
        alignSelf: 'stretch',
    },
});
