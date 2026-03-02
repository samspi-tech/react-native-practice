import { PropsWithChildren, useEffect } from 'react';
import { useRouter } from 'expo-router';

import { useUserContext } from '../../hooks/useUserContext';
import ThemedLoader from '../ThemedLoader';

const ProtectedRoutes = ({ children }: PropsWithChildren) => {
    const router = useRouter();
    const { user, isAuthChecked } = useUserContext();

    useEffect(() => {
        if (isAuthChecked && user === null) {
            router.replace('/login');
        }
    }, [user, isAuthChecked]);

    if (!isAuthChecked || !user) {
        return <ThemedLoader />;
    }

    return children;
};

export default ProtectedRoutes;
