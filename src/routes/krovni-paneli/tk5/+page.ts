import type { PageLoad } from './$types';
import { TK5_fetchDataFromGSheet } from '$lib/gSheets'

export const load: PageLoad = async () => {
    return TK5_fetchDataFromGSheet()
};