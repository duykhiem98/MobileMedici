import { Themes } from 'assets/themes';
import i18next from 'i18next';
import * as React from 'react';
import { memo } from 'react';
import { Normalize, useTranslation } from 'react-i18next';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Resource } from 'utilities/i18next';

import GradientText from './GradientText';

interface StyledTextProps extends TextProps {
    customStyle?: StyleProp<TextStyle>;
    i18nParams?: any;
    gradient?: any;
}

interface StyledTextWithOriginValue extends StyledTextProps {
    originText?: string;
    i18nText?: never;
}

interface StyledTextWithI18nValue extends StyledTextProps {
    originText?: never;
    i18nText?: Normalize<Resource>;
}

type StyledTextCombineProps = StyledTextWithOriginValue | StyledTextWithI18nValue;

const StyledText = (props: StyledTextCombineProps) => {
    const { t } = useTranslation();
    const { style, originText, i18nText, i18nParams, gradient } = props;
    let value;

    // if (style) {
    //   logger(
    //     'StyledText should use customStyle to avoid override default style text',
    //     true,
    //   );
    // }

    if (originText) {
        value = originText;
    } else if (i18nText || i18next.exists(i18nText || '', i18nParams)) {
        value = t(i18nText as Normalize<Resource>, i18nParams);
    } else {
        value = i18nText || '';
    }

    return (
        <>
            {gradient ? (
                <GradientText colors={gradient} style={styles.txtDefault}>
                    {value}
                </GradientText>
            ) : (
                <Text style={[styles.txtDefault, props.customStyle]} {...props}>
                    {value}
                </Text>
            )}
        </>
    );
};

const styles = ScaledSheet.create({
    txtDefault: {
        color: Themes.Light.COLORS.grayColor,
        fontFamily: 'SVN-Graphik',
    },
});

export default memo(StyledText);
