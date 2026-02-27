import {
    useColorScheme,
    Image,
    StyleProp,
    ImageStyle,
    ImageProps,
    ImageSourcePropType,
} from 'react-native';

import DarkLogo from '../assets/img/logo_dark.png';
import LightLogo from '../assets/img/logo_light.png';

interface ThemedLogoProps extends ImageProps {
    style?: StyleProp<ImageStyle>;
}

const ThemedLogo = ({ style, ...rest }: ThemedLogoProps) => {
    const colorScheme = useColorScheme() ?? 'dark';

    const logo: ImageSourcePropType =
        colorScheme === 'dark' ? DarkLogo : LightLogo;

    return <Image source={logo} style={[style]} {...rest} />;
};

export default ThemedLogo;
