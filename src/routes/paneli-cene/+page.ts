import type { PageLoad } from './$types';
import { TFH_fetchDataFromGSheet, TFV_fetchDataFromGSheet, TK5_fetchDataFromGSheet } from '$lib/gSheets'

export const load: PageLoad = async () => {
    const tk5 = TK5_fetchDataFromGSheet()
    const tfh = TFH_fetchDataFromGSheet()
    const tfv = TFV_fetchDataFromGSheet()

    return { tk5, tfh, tfv }
};