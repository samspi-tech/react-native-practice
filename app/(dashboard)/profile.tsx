import { StyleSheet } from 'react-native';

import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import { useUserContext } from '../../hooks/useUserContext';
import ThemedButton from '../../components/ThemedButton';

const Profile = () => {
    const { handleLogout, user } = useUserContext();

    return (
        <ThemedView style={styles.container}>
            <ThemedText isTitle={true} style={styles.heading}>
                {user?.email}
            </ThemedText>
            <Spacer />

            <ThemedText>Time to start reading some books...</ThemedText>
            <Spacer />

            <ThemedButton onPress={handleLogout} text="Logout" />
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
