import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { useTheme } from '../../hooks/useTheme';
import ProtectedRoutes from '../../components/auth/ProtectedRoutes';

const DashboardLayout = () => {
    const { navBackground, iconColor, iconColorFocused } = useTheme();

    return (
        <ProtectedRoutes>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: navBackground,
                        paddingTop: 10,
                        height: 90,
                    },
                    tabBarActiveTintColor: iconColorFocused,
                    tabBarInactiveTintColor: iconColor,
                }}
            >
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                size={24}
                                name={focused ? 'person' : 'person-outline'}
                                color={focused ? iconColorFocused : iconColor}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="books"
                    options={{
                        title: 'Books',
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                size={24}
                                name={focused ? 'book' : 'book-outline'}
                                color={focused ? iconColorFocused : iconColor}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="createBook"
                    options={{
                        title: 'Create Book',
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                size={24}
                                name={focused ? 'create' : 'create-outline'}
                                color={focused ? iconColorFocused : iconColor}
                            />
                        ),
                    }}
                />
            </Tabs>
        </ProtectedRoutes>
    );
};

export default DashboardLayout;
