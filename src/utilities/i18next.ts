import i18next from 'i18next';
import { getLocales } from 'react-native-localize';
import en from 'assets/lang/en';
import vn from 'assets/lang/vi';
import { initReactI18next } from 'react-i18next';
export type Resource = typeof en & typeof vn;

const DEFAULT_LANG = 'vn';

export function getLanguage() {
    const lan = getLocales();
    const listLng = ['vn', 'en'];
    try {
        const primaryLocate = lan[0];
        let tempLng = primaryLocate?.languageCode?.toLowerCase();
        if (tempLng === 'vn') {
            tempLng = 'vn';
        }
        const lng = listLng.includes(tempLng) ? tempLng : DEFAULT_LANG;
        // If you want to use DEFAULT_LANG only, comment above line + uncomment below line
        // const lng = DEFAULT_LANG;
        return lng;
    } catch (error) {
        return DEFAULT_LANG;
    }
}

i18next.use(initReactI18next).init(
    {
        interpolation: {
            // React already does escaping
            escapeValue: false,
        },
        lng: DEFAULT_LANG,
        fallbackLng: DEFAULT_LANG,
        // Using simple hardcoded resources for simple example
        resources: {
            en: {
                translation: en,
            },
            vn: {
                translation: vn,
            },
        },
        compatibilityJSON: 'v3',
    },
    (err) => {
        console.log('i18next', err);
    },
);

export default i18next;
