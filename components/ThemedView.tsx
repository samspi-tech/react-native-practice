import { StyleProp, View, ViewStyle, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';
import { PropsWithChildren } from 'react';

interface ThemedViewProps {
    style?: StyleProp<ViewStyle>;
}

const ThemedView = ({ style, ...rest }: PropsWithChildren<ThemedViewProps>) => {
    const colorScheme = useColorScheme() ?? 'dark';
    const theme = Colors[colorScheme];

    return (
        <View
            style={[{ backgroundColor: theme.background }, style]}
            {...rest}
        />
    );
};

export default ThemedView;
