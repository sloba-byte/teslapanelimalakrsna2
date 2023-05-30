import type { PageLoad } from './$types';
import { TFH_getLowestPrice, TFV_getLowestPrice } from '$lib/gSheets'

export const load: PageLoad = async () => {

    const tfh_lowestPrice = TFH_getLowestPrice()
    const tfv_lowestPrice = TFV_getLowestPrice()

    return { tfh_lowestPrice, tfv_lowestPrice }
};