/* eslint-disable prettier/prettier */
export interface ResponseLogin {
    code: number;
    data: {
        name: string;
        phone: string;
        token: string;
    };
    message: string;
}
