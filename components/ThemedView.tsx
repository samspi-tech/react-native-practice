import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';
import { PropsWithChildren } from 'react';

import { useTheme } from '../hooks/useTheme';

interface ThemedViewProps extends ViewProps {
    style?: StyleProp<ViewStyle>;
}

const ThemedView = ({ style, ...rest }: PropsWithChildren<ThemedViewProps>) => {
    const theme = useTheme();

    return (
        <View
            style={[{ backgroundColor: theme.background }, style]}
            {...rest}
        />
    );
};

export default ThemedView;
