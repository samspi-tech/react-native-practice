import {
    StyleProp,
    Text,
    TextInput,
    TextInputProps,
    TextStyle,
} from 'react-native';

import { useTheme } from '../hooks/useTheme';
import { PropsWithChildren } from 'react';

interface ThemedTextInputProps extends TextInputProps {
    style?: StyleProp<TextStyle>;
}

const ThemedTextInput = ({
    style,
    ...rest
}: PropsWithChildren<ThemedTextInputProps>) => {
    const theme = useTheme();

    return (
        <TextInput
            placeholderTextColor={theme.text}
            style={[
                {
                    backgroundColor: theme.uiBackground,
                    color: theme.text,
                    padding: 20,
                    borderRadius: 6,
                },
                style,
            ]}
            {...rest}
        />
    );
};

export default ThemedTextInput;
