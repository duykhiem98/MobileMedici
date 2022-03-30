/* eslint-disable prettier/prettier */
import * as yup from 'yup';
export const registrationValidation = yup.object().shape({
    email: yup.string().required('Quý khách vui lòng nhập mật khẩu mới'),
    password: yup
        .string()
        .required('Quý khách vui lòng nhập mật khẩu mới')
        .test('len', 'Quý khách vui lòng nhập mật khẩu mới đủ 8 kí tự', (val = '') => val.length > 7)
        .test(
            'check_at_least_of_4',
            'Mật khẩu không đúng quy tắc: Chữ hoa, chữ thường, số, ký tự đặc biệt',
            (val = '') => {
                let count = 0;
                const isContainsUppercase = /^(?=.*[A-Z]).*$/;
                const isContainsLowercase = /^(?=.*[a-z]).*$/;
                const isContainsNumber = /^(?=.*[0-9]).*$/;
                const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;

                if (isContainsUppercase.test(val)) {
                    // check uppercase
                    count += 1;
                }
                if (isContainsLowercase.test(val)) {
                    // check lowercase
                    count += 1;
                }
                if (isContainsNumber.test(val)) {
                    count += 1;
                }
                if (isContainsSymbol.test(val)) {
                    count += 1;
                }
                return count >= 4;
            },
        ),
});
