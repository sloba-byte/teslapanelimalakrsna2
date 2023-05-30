import type { PageLoad } from './$types';
import { TK5_getLowestPrice } from '$lib/gSheets'

export const load: PageLoad = async () => {
    return TK5_getLowestPrice()
};