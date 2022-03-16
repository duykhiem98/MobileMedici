import { Platform } from 'react-native';

export const isAndroid = Platform.OS === 'android';

export const isIos = Platform.OS === 'ios';
export function stringMoneyToNumber(num: string) {
    return num.replace(/[0-9]/g, '*');
}
