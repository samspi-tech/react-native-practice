import {
    Pressable,
    PressableProps,
    StyleProp,
    StyleSheet,
    Text,
} from 'react-native';

import { Colors } from '../constants/Colors';

interface ThemedButtonProps extends PressableProps {
    text: string;
    style?: StyleProp<PressableProps>;
}

const ThemedButton = ({ text, style, ...rest }: ThemedButtonProps) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.btn,
                pressed && styles.pressed,
                style,
            ]}
            {...rest}
        >
            <Text style={{ color: '#f2f2f2' }}>{text}</Text>
        </Pressable>
    );
};

export default ThemedButton;

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        padding: 18,
        borderRadius: 6,
        marginVertical: 10,
    },
    pressed: {
        opacity: 0.5,
    },
});
