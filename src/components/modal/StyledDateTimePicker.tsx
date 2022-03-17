import { Themes } from 'assets/themes';
import StyledText from 'components/common/StyledText';
import StyledView from 'components/common/StyledView';
import React, { forwardRef, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import CalendarPicker from 'react-native-calendar-picker';

import Modal from 'react-native-modal';
import { ScaledSheet } from 'react-native-size-matters';
import Metrics from 'utilities/metrics';

interface Props {
    isVisible?: boolean;
    dateSelected?: any;
    onSelected(value, key): void;
}
const Header = () => {
    return <View></View>;
};
const StyledDateTimePicker = (props: Props, ref: any) => {
    const { isVisible, dateSelected, onSelected } = props;

    const [visible, setVisible] = useState(isVisible);
    const [key, setKey] = useState('');
    const [selected, setSelected] = useState(dateSelected);
    console.log('sss', selected);

    useEffect(() => {
        ref.current = { showModal, setKey };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const showModal = () => {
        setVisible(true);
    };
    const hideModal = () => {
        setVisible(false);
    };
    const onDateChange = (date: any) => {
        setSelected(date);
    };
    const cancelEvent = () => {
        setVisible(false);
    };
    const doneEvent = () => {
        onSelected(selected, key);
        setVisible(false);
    };
    if (!visible) return <View />;

    return (
        <View>
            <Modal isVisible={visible} onBackdropPress={hideModal} backdropOpacity={0.2}>
                <View style={styles.modalContainer}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <CalendarPicker
                            width={Metrics.screenWidth - 50}
                            onDateChange={(value) => onDateChange(value)}
                            monthTitleStyle={styles.monthTitleStyle}
                        />
                    </View>
                    <View style={styles.bntStyle}>
                        <TouchableOpacity style={styles.bntLeft} onPress={cancelEvent}>
                            <StyledText
                                originText={'Hủy'}
                                style={{ color: Themes.Light.COLORS.black, fontWeight: '600' }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bntRight} onPress={doneEvent}>
                            <StyledText
                                originText={'Xác nhận'}
                                style={{ color: Themes.Light.COLORS.white, fontWeight: '600' }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default forwardRef(StyledDateTimePicker);

const styles = ScaledSheet.create({
    modalContainer: {
        backgroundColor: Themes.Light.COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '16@vs',
        borderRadius: '10@vs',
    },
    bntStyle: {
        paddingTop: '12@vs',
        flexDirection: 'row',
    },
    bntLeft: {
        borderRadius: '4@vs',
        marginRight: '4@s',
        height: '44@vs',
        paddingHorizontal: '3@ms',
        alignItems: 'center',
        justifyContent: 'center',
        width: '130@s',
        backgroundColor: Themes.Light.COLORS.color_898E93,
    },
    bntRight: {
        borderRadius: '4@vs',
        height: '44@vs',
        paddingHorizontal: '3@ms',
        marginLeft: '4@s',
        alignItems: 'center',
        justifyContent: 'center',
        width: '130@s',
        backgroundColor: Themes.Light.COLORS.resolutionBlue,
    },
    txt: {
        fontSize: '16@ms',
        fontWeight: 'bold',
    },
    monthTitleStyle: {
        color: '#2267B2',
        fontWeight: '600',
    },
});
