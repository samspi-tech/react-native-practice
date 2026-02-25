import { PropsWithChildren } from 'react';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native';

import { useTheme } from '../hooks/useTheme';

interface ThemedTextProps extends TextProps {
    style?: StyleProp<TextStyle>;
    isTitle?: boolean;
}

const ThemedText = ({
    style,
    isTitle = false,
    ...rest
}: PropsWithChildren<ThemedTextProps>) => {
    const theme = useTheme();

    const textColor = isTitle ? theme.title : theme.text;

    return <Text style={[{ color: textColor }, style]} {...rest} />;
};

export default ThemedText;
