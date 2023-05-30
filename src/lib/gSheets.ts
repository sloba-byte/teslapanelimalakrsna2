import tk5 from '$lib/prefatched/tk5.json'
import tfh from '$lib/prefatched/tfh.json'
import tfv from '$lib/prefatched/tfv.json'

interface GoogleSheetApiFormat {
    range: string;
    majorDimension: string;
    values: string[][];
}

export interface PanelPrice {
    header: string[],
    values: string[][]
}

export interface PanelLowestPrice {
    price: string
    priceNoPDV: string
}

function prepareDataFromGSheet(gSheetData: GoogleSheetApiFormat): PanelPrice {
    const values = gSheetData.values.slice(1) as string[][];
    const header = gSheetData.values[0] as string[]

    return { header, values };
}

export function getLowestPrice(gSheetData: GoogleSheetApiFormat): PanelLowestPrice {
    let price = "-1"
    let priceNoPDV = "-1"

    if (gSheetData.values.length < 2) {
        return { price, priceNoPDV }
    }

    let priceNoPDVIndex = -1
    let priceIndex = -1

    const header = gSheetData.values[0]

    header.forEach((e, i) => {
        if (e.includes("Cena")) {
            //first Cena is with no PDV
            if (priceNoPDVIndex == -1) {
                priceNoPDVIndex = i
            } else {
                priceIndex = i
            }
        }
    });

    if (priceIndex != -1 && priceNoPDVIndex != -1) {
        price = gSheetData.values[1][priceIndex]
        priceNoPDV = gSheetData.values[1][priceNoPDVIndex]
    }

    return {
        price, priceNoPDV
    }
}

export function TK5_getLowestPrice(): PanelLowestPrice {
    return getLowestPrice(tk5)
}

export function TFH_getLowestPrice(): PanelLowestPrice {
    return getLowestPrice(tfh)
}

export function TFV_getLowestPrice(): PanelLowestPrice {
    return getLowestPrice(tfv)
}

export function TK5_fetchDataFromGSheet(): PanelPrice {
    return prepareDataFromGSheet(tk5)
}

export function TFH_fetchDataFromGSheet(): PanelPrice {
    return prepareDataFromGSheet(tfh)
}

export function TFV_fetchDataFromGSheet(): PanelPrice {
    return prepareDataFromGSheet(tfv)
}


