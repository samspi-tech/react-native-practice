import { PropsWithChildren } from 'react';
import { StyleProp, Text, TextStyle, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

interface ThemedTextProps {
    style?: StyleProp<TextStyle>;
    title?: boolean;
}

const ThemedText = ({
    style,
    title = false,
    ...rest
}: PropsWithChildren<ThemedTextProps>) => {
    const colorScheme = useColorScheme() ?? 'dark';
    const theme = Colors[colorScheme];

    const textColor = title ? theme.title : theme.text;

    return <Text style={[{ color: textColor }, style]} {...rest} />;
};

export default ThemedText;
