import type { PageLoad } from './$types';
import { TFH_fetchDataFromGSheet } from '$lib/gSheets'

export const load: PageLoad = async () => {
    return TFH_fetchDataFromGSheet()
};