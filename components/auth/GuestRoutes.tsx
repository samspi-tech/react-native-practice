import { PropsWithChildren, useEffect } from 'react';
import { useRouter } from 'expo-router';

import { useUserContext } from '../../hooks/useUserContext';
import ThemedLoader from '../ThemedLoader';

const GuestRoutes = ({ children }: PropsWithChildren) => {
    const router = useRouter();
    const { user, isAuthChecked } = useUserContext();

    useEffect(() => {
        if (isAuthChecked && user !== null) {
            router.replace('/profile');
        }
    }, [user, isAuthChecked]);

    if (!isAuthChecked || user) {
        return <ThemedLoader />;
    }

    return children;
};

export default GuestRoutes;
