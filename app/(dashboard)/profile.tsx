import { StyleSheet } from 'react-native';

import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import ThemedButton from '../../components/ThemedButton';
import { useUserContext } from '../../hooks/useUserContext';

const Profile = () => {
    const { handleLogout, user } = useUserContext();

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={{ gap: 40 }}>
                <ThemedText isTitle={true} style={styles.heading}>
                    {user?.email}
                </ThemedText>

                <ThemedText>Time to start reading some books...</ThemedText>

                <ThemedButton onPress={handleLogout} text="Logout" />
            </ThemedView>
        </ThemedView>
    );
};

export default Profile;

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
    },
});
