import { useColorScheme, Image, StyleProp, ImageStyle } from 'react-native';

import DarkLogo from '../assets/img/logo_light.png';
import LightLogo from '../assets/img/logo_dark.png';

interface ThemedLogoProps {
    style?: StyleProp<ImageStyle>;
}

const ThemedLogo = ({ style }: ThemedLogoProps) => {
    const colorScheme = useColorScheme() ?? 'dark';

    const logo = colorScheme === 'dark' ? LightLogo : DarkLogo;

    return <Image source={logo} style={[style]} />;
};

export default ThemedLogo;
