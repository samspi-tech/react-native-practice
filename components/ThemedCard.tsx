import {
    StyleProp,
    View,
    ViewStyle,
    useColorScheme,
    StyleSheet,
    ViewProps,
} from 'react-native';
import { PropsWithChildren } from 'react';

import { Colors } from '../constants/Colors';

interface ThemedCardProps extends ViewProps {
    style?: StyleProp<ViewStyle>;
}

const ThemedCard = ({ style, ...rest }: PropsWithChildren<ThemedCardProps>) => {
    const colorScheme = useColorScheme() ?? 'dark';
    const theme = Colors[colorScheme];

    return (
        <View
            style={[
                { backgroundColor: theme.uiBackground },
                styles.card,
                style,
            ]}
            {...rest}
        />
    );
};

export default ThemedCard;

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 5,
    },
});
