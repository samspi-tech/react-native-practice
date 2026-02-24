import { PropsWithChildren } from 'react';
import { DimensionValue, View } from 'react-native';

interface SpacerProps {
    width?: DimensionValue;
    height?: DimensionValue;
}

const Spacer = ({
    width = '100%',
    height = 40,
}: PropsWithChildren<SpacerProps>) => {
    return <View style={{ width, height }} />;
};

export default Spacer;
