import {
    StyleProp,
    StyleSheet,
    Text,
    TextProps,
    TextStyle,
} from 'react-native';
import { PropsWithChildren } from 'react';

import { Colors } from '../constants/Colors';

interface ErrorMessageProps extends TextProps {
    style?: StyleProp<TextStyle>;
}

const ErrorMessage = ({
    style,
    ...rest
}: PropsWithChildren<ErrorMessageProps>) => {
    return <Text style={[styles.container, style]} {...rest} />;
};

export default ErrorMessage;

const styles = StyleSheet.create({
    container: {
        color: Colors.warning,
        borderColor: Colors.warning,
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
        backgroundColor: '#f5c1c8',
        marginHorizontal: 10,
    },
});
