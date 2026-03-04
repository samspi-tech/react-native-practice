import { StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';

import ThemedView from '../../../components/ThemedView';
import ThemedText from '../../../components/ThemedText';
import { useBooksContext } from '../../../hooks/useBooksContext';
import { Book } from '../../../types/types';
import ThemedCard from '../../../components/ThemedCard';
import ThemedLoader from '../../../components/ThemedLoader';

const BookDetails = () => {
    const [book, setBook] = useState<Book | null>(null);

    const { getSingleBook } = useBooksContext();
    const { id } = useLocalSearchParams<{ id: string }>();

    useEffect(() => {
        const loadBook = async () => {
            const bookData = await getSingleBook(id);
            setBook(bookData);
        };
        loadBook();
    }, [id]);

    if (!book) {
        return (
            <ThemedView isSafeView={true} style={styles.container}>
                <ThemedLoader />;
            </ThemedView>
        );
    }

    return (
        <ThemedView isSafeView={true} style={styles.container}>
            <ThemedCard style={styles.card}>
                <ThemedText style={styles.title}>{book.title}</ThemedText>
                <ThemedText style={styles.author}>
                    Written by {book.author}
                </ThemedText>
                <ThemedText isTitle={true}>Book description:</ThemedText>
                <ThemedText>{book.description}</ThemedText>
            </ThemedCard>
        </ThemedView>
    );
};

export default BookDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    title: {
        fontSize: 22,
        marginVertical: 10,
    },
    author: {
        marginBottom: 40,
    },
    card: {
        margin: 20,
        gap: 10,
    },
});
