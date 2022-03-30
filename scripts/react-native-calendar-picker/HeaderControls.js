import React from 'react';
import { View, Text, Platform, TouchableOpacity, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Utils } from './Utils';
import Controls from './Controls';

export default function HeaderControls(props) {
    const {
        styles,
        currentMonth,
        currentYear,
        onPressNext,
        onPressPrevious,
        onPressMonth,
        onPressYear,
        months,
        previousComponent,
        nextComponent,
        previousTitle,
        nextTitle,
        previousTitleStyle,
        nextTitleStyle,
        monthTitleStyle,
        yearTitleStyle,
        textStyle,
        restrictMonthNavigation,
        maxDate,
        minDate,
        headingLevel,
        monthYearHeaderWrapperStyle,
        headerWrapperStyle,
    } = props;
    const MONTHS = months || Utils.MONTHS; // English Month Array
    const monthName = MONTHS[currentMonth];
    const year = currentYear;

    const disablePreviousMonth =
        restrictMonthNavigation && Utils.isSameMonthAndYear(minDate, currentMonth, currentYear);
    const disableNextMonth = restrictMonthNavigation && Utils.isSameMonthAndYear(maxDate, currentMonth, currentYear);

    const accessibilityProps = { accessibilityRole: 'header' };
    if (Platform.OS === 'web') {
        accessibilityProps['aria-level'] = headingLevel;
    }

    return (
        <View style={[styles.headerWrapper, headerWrapperStyle]}>
            <Controls
                disabled={false}
                label={previousTitle}
                component={previousComponent}
                onPressControl={() => {}}
                styles={styles.previousContainer}
                textStyles={[styles.navButtonText, textStyle, previousTitleStyle]}
            />
            <View style={[styles.monthYearHeaderWrapper, monthYearHeaderWrapperStyle]}>
                <TouchableOpacity onPress={onPressMonth} style={s.monthNameStyle}>
                    <Text style={[styles.monthHeaderMainText, textStyle, monthTitleStyle]} {...accessibilityProps}>
                        {monthName}
                    </Text>
                    <Image source={require('./ChevronDown.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressYear} style={s.year}>
                    <Text style={[styles.yearHeaderMainText, textStyle, yearTitleStyle]}>{year}</Text>
                    <Image source={require('./ChevronDown.png')} style={{ tintColor: 'gray' }} />
                </TouchableOpacity>
            </View>
            <Controls
                disabled={false}
                label={nextTitle}
                component={nextComponent}
                onPressControl={() => {}}
                styles={styles.nextContainer}
                textStyles={[styles.navButtonText, textStyle, nextTitleStyle]}
            />
        </View>
    );
}

HeaderControls.propTypes = {
    currentMonth: PropTypes.number,
    currentYear: PropTypes.number,
    onPressNext: PropTypes.func,
    onPressPrevious: PropTypes.func,
    onPressMonth: PropTypes.func,
    onPressYear: PropTypes.func,
};
const s = StyleSheet.create({
    monthNameStyle: {
        flexDirection: 'row',
        backgroundColor: '#F8F7FA',
        borderRadius: 8,
        padding: 8,
    },
    year: {
        flexDirection: 'row',
        padding: 8,
    },
});
