import axios, { AxiosRequestConfig } from 'axios';
import * as HDC from '../interfaces/HuntingdonDistrict';

const axiosConfig: AxiosRequestConfig = {
    headers: {
        api_key: '5efbf806ca6641c0bb36f266956cfe8c'
    },
    params: {
        authority: 'HDC'
    }
};

export default class HuntingdonDistrict {
    /**
     * Get a list of addresses from a postcode
     * @param postcode Postcode to get addresses for
     * @returns An array of addresses
     */
    async getAddressesByPostcode(postcode: string): Promise<HDC.GetAddressesByPostcode.Address[]> {
        axiosConfig.params.postcode = postcode;

        return await (
            await axios.get('https://servicelayer3c.azure-api.net/wastecalendar/address/search', axiosConfig)
        ).data;
    }

    /**
     * Get an addresses from a UPRN
     * @param uprn Unique property reference number
     * @returns An address
     */
    async getAddressByUPRN(uprn: string): Promise<HDC.GetAddressesByPostcode.Address> {
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
    async getCollectionsByUPRN(uprn: string, numberOfCollections: number = 12): Promise<HDC.GetCollectionsByUPRN.Root> {
        axiosConfig.params.numberOfCollections = numberOfCollections;

        return await (
            await axios.get(`https://servicelayer3c.azure-api.net/wastecalendar/collection/search/${uprn}/`, axiosConfig)
        ).data;
    }

    /**
     * Get ICalendar for a specified UPRN
     * @param uprn Unique property reference number. Eg. 10012048679
     * @returns ICalendar as a string
     */
    async getICalByUPRN(uprn: string): Promise<string> {
        return await (
            await axios.get(`https://servicelayer3c.azure-api.net/wastecalendar/calendar/ical/${uprn}`, axiosConfig)
        ).data;
    }
}
