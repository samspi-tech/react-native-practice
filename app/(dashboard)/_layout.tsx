import { Tabs } from 'expo-router';

import { useTheme } from '../../hooks/useTheme';

const DashboardLayout = () => {
    const theme = useTheme();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: theme.navBackground,
                    paddingTop: 10,
                    height: 90,
                },
                tabBarActiveTintColor: theme.iconColorFocused,
                tabBarInactiveTintColor: theme.iconColor,
            }}
        >
            <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
            <Tabs.Screen name="books" options={{ title: 'Books' }} />
            <Tabs.Screen name="createBook" options={{ title: 'Create Book' }} />
        </Tabs>
    );
};

export default DashboardLayout;
