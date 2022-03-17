import { Platform } from 'react-native';

export const isAndroid = Platform.OS === 'android';

export const isIos = Platform.OS === 'ios';
export function stringMoneyToNumber(num: string) {
    return num.replace(/[0-9]/g, '*');
}
export function currencyFormat(num: number) {
    if (!num) return '';
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
