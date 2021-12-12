import axios from 'axios';
import * as CCC from '../interfaces/CambridgeCity';

const axiosConfig = {
    headers: {
        Accept: 'application/json',
        'cache-control': 'no-cache'
    }
};

export default class CambridgeCity {
    /**
     * Get a list of addresses from a postcode
     * @param postcode Postcode to get addresses for
     * @returns An array of addresses
     */
    async getAddressesByPostcode(postCode: string): Promise<CCC.getAddressesByPostcode.Address[]> {
        return await (
            await axios.get(`https://servicelayer3c.azure-api.net/wastecalendar/address/search/`, { ...axiosConfig, params: { postCode } })
        ).data;
    }

    /**
     * Get waster collection information by UPRN
     * @param uprn Unique property reference number
     * @param numberOfCollections Limit the amount of collections returned. default: 12
     */
    async getCollectionsByUPRN(uprn: string, numberOfCollections: number = 12): Promise<CCC.getCollectionsByUPRN.Root> {
        return await (
            await axios.get(`https://servicelayer3c.azure-api.net/wastecalendar/collection/search/${uprn}/`, { ...axiosConfig, params: { numberOfCollections } })
        ).data;
    }
}
