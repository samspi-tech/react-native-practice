import { FlatList, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import { useBooksContext } from '../../hooks/useBooksContext';
import { Colors } from '../../constants/Colors';
import ThemedCard from '../../components/ThemedCard';

const Books = () => {
    const router = useRouter();
    const { books } = useBooksContext();

    return (
        <ThemedView isSafeView={true} style={styles.container}>
            <ThemedText isTitle={true} style={styles.heading}>
                Your Reading List
            </ThemedText>

            <FlatList
                data={books}
                keyExtractor={(book) => book.$id}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <Pressable onPress={() => router.push(`/book/${item.$id}`)}>
                        <ThemedCard style={styles.card}>
                            <ThemedText style={styles.title}>
                                {item.title}
                            </ThemedText>
                            <ThemedText>Written by {item.author}</ThemedText>
                        </ThemedCard>
                    </Pressable>
                )}
            />
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
    list: {
        marginTop: 40,
        gap: 10,
    },
    card: {
        width: '90%',
        marginHorizontal: '5%',
        padding: 10,
        paddingLeft: 14,
        borderLeftColor: Colors.primary,
        borderLeftWidth: 4,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});
