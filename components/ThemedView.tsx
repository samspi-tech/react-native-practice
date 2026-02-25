import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';
import { PropsWithChildren } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '../hooks/useTheme';

interface ThemedViewProps extends ViewProps {
    style?: StyleProp<ViewStyle>;
    isSafeView?: boolean;
}

const ThemedView = ({
    style,
    isSafeView = false,
    ...rest
}: PropsWithChildren<ThemedViewProps>) => {
    const theme = useTheme();
    const inset = useSafeAreaInsets();

    if (isSafeView) {
        return (
            <View
                style={[
                    {
                        backgroundColor: theme.background,
                        paddingTop: inset.top,
                        paddingBottom: inset.bottom,
                    },
                    style,
                ]}
                {...rest}
            />
        );
    }

    return (
        <View
            style={[{ backgroundColor: theme.background }, style]}
            {...rest}
        />
    );
};

export default ThemedView;
