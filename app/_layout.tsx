import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

import { Colors } from '../constants/Colors';

const RootLayout = () => {
    const colorScheme = useColorScheme() ?? 'dark';
    const theme = Colors[colorScheme];

    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: theme.navBackground },
                headerTintColor: theme.title,
            }}
        >
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ title: 'Home' }} />
        </Stack>
    );
};

export default RootLayout;
