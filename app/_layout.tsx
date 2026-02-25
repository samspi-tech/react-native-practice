import { Stack } from 'expo-router';

import { useTheme } from '../hooks/useTheme';

const RootLayout = () => {
    const theme = useTheme();

    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: theme.navBackground },
                headerTintColor: theme.title,
            }}
        >
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
        </Stack>
    );
};

export default RootLayout;
