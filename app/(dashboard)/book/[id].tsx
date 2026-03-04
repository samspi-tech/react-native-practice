import { StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

import ThemedView from '../../../components/ThemedView';
import ThemedText from '../../../components/ThemedText';
import { useBooksContext } from '../../../hooks/useBooksContext';
import { Book } from '../../../types/types';
import ThemedCard from '../../../components/ThemedCard';
import ThemedLoader from '../../../components/ThemedLoader';
import ThemedButton from '../../../components/ThemedButton';
import { Colors } from '../../../constants/Colors';

const BookDetails = () => {
    const [book, setBook] = useState<Book | null>(null);

    const router = useRouter();
    const { id } = useLocalSearchParams<{ id: string }>();
    const { getSingleBook, deleteBook } = useBooksContext();

    const handleDeleteBook = async () => {
        await deleteBook(id);

        setBook(null);
        router.replace('/books');
    };

    useEffect(() => {
        const loadBook = async () => {
            const bookData = await getSingleBook(id);
            setBook(bookData);
        };
        loadBook();

        return () => {
            setBook(null);
        };
    }, [id]);

    if (!book) {
        return <ThemedLoader />;
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

                <ThemedButton
                    text="Delete"
                    style={styles.deleteBtn}
                    onPress={handleDeleteBook}
                />
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
    deleteBtn: {
        marginTop: 40,
        width: '100%',
        backgroundColor: Colors.warning,
    },
});
