import axios, { AxiosRequestConfig } from 'axios';
import * as SCDC from '../interfaces/SouthCambridgeDistrict';

const axiosConfig: AxiosRequestConfig = {
    headers: {
        Accept: 'application/json',
        'cache-control': 'no-cache'
    }
};

export default class SouthCambridgeDistrict {
    /**
     * Get a list of addresses from a postcode
     * @param postcode Postcode to get addresses for
     * @returns An array of addresses
     */
    async getAddressesByPostcode(postcode: string): Promise<SCDC.GetAddressesByPostcode.Address[]> {
        axiosConfig.params.postCode = postcode;

        return await (
            await axios.get(`https://servicelayer3c.azure-api.net/wastecalendar/address/search/`, axiosConfig)
        ).data;
    }

    /**
     * Get an addresses from a UPRN
     * @param uprn Unique property reference number
     * @returns An address
     */
    async getAddressByUPRN(uprn: string): Promise<SCDC.GetAddressesByPostcode.Address> {
        axiosConfig.params.id = uprn;

        return await (
            await axios.get('https://servicelayer3c.azure-api.net/wastecalendar/address/search', axiosConfig)
        ).data;
    }

    /**
     * Get waste collection information by UPRN
     * @param uprn Unique property reference number
     * @param numberOfCollections Limit the amount of collections returned. default: 12
     */
    async getCollectionsByUPRN(uprn: string, numberOfCollections: number = 12): Promise<SCDC.GetCollectionsByUPRN.Root> {
        axiosConfig.params.numberOfCollections = numberOfCollections;

        return await (
            await axios.get(`https://servicelayer3c.azure-api.net/wastecalendar/collection/search/${uprn}/`, axiosConfig)
        ).data;
    }

    /**
     * Get ICalendar for a specified UPRN
     * @param uprn Unique property reference number. Eg. 100090167984
     * @returns ICalendar as a string
     */
    async getICalByUPRN(uprn: string): Promise<string> {
        return await (
            await axios.get(`https://servicelayer3c.azure-api.net/wastecalendar/calendar/ical/${uprn}`, axiosConfig)
        ).data;
    }
}
