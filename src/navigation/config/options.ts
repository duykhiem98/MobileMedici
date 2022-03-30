import { CardStyleInterpolators } from '@react-navigation/stack';
import transition from './transition';

const navigationConfigs = {
    cardStyle: {
        backgroundColor: '#fff',
    },
    headerShown: false,
    gestureEnabled: true,
    cardShadowEnabled: true,
    cardOverlayEnabled: true,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    transitionSpec: {
        open: transition,
        close: transition,
    },
};

export default navigationConfigs;
