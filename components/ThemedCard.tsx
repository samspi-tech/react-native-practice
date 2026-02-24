import {
    StyleProp,
    View,
    ViewStyle,
    useColorScheme,
    StyleSheet,
} from 'react-native';
import { Colors } from '../constants/Colors';
import { PropsWithChildren } from 'react';

interface ThemedCardProps {
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
