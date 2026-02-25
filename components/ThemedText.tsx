import { PropsWithChildren } from 'react';
import {
    StyleProp,
    Text,
    TextProps,
    TextStyle,
    useColorScheme,
} from 'react-native';

import { Colors } from '../constants/Colors';

interface ThemedTextProps extends TextProps {
    style?: StyleProp<TextStyle>;
    isTitle?: boolean;
}

const ThemedText = ({
    style,
    isTitle = false,
    ...rest
}: PropsWithChildren<ThemedTextProps>) => {
    const colorScheme = useColorScheme() ?? 'dark';
    const theme = Colors[colorScheme];

    const textColor = isTitle ? theme.title : theme.text;

    return <Text style={[{ color: textColor }, style]} {...rest} />;
};

export default ThemedText;
