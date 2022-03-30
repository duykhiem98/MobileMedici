/* eslint-disable prettier/prettier */
// import {getResources} from 'api/resources/getResources';
import { useEffect, useState } from 'react';
// import {updateResource} from 'state-management/resources/action';
// import {store} from 'state-management/store';
export function logger(msg: string, isWarning?: boolean, params?: any): void {
    if (__DEV__ && !isWarning) {
        if (params) console.log(msg, params);
        else console.log(msg);
    }
    if (__DEV__ && isWarning) {
        if (params) console.warn(msg, params);
        else console.warn(msg);
    }
}
export const useInitApp = () => {
    const [loading, setLoading] = useState(true);

    const initApp = async () => {
        const getDataResource = async () => {
            try {
                // staticData.resources.map(async (i) => {
                //   const resourceApi = await getResources({ codeType: i.type });
                //   store.dispatch(updateResource({ [i.key]: resourceApi?.body }));
                // });
            } catch (err: any) {
                logger(err, false, 'get resource');
            } finally {
                setLoading(false);
            }
        };
        getDataResource();
    };

    useEffect(() => {
        initApp();
    }, []);
    return { loading };
};
export const test = () => console.log('test');
