import type { PageLoad } from './$types';
import { TFV_fetchDataFromGSheet } from '$lib/gSheets'

export const load: PageLoad = async () => {
    return TFV_fetchDataFromGSheet()
};