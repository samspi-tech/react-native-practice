import { useColorScheme } from 'react-native';

import { Colors } from '../constants/Colors';

export const useTheme = () => {
    const colorScheme = useColorScheme() ?? 'dark';

    return Colors[colorScheme];
};
