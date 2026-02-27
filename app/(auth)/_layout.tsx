import { Stack } from 'expo-router';

import GuestRoutes from '../../components/auth/GuestRoutes';

const AuthLayout = () => {
    return (
        <GuestRoutes>
            <Stack
                screenOptions={{
                    headerShown: false,
                    animation: 'none',
                }}
            />
        </GuestRoutes>
    );
};

export default AuthLayout;
