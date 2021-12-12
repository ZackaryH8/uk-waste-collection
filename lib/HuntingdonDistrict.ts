import axios, { AxiosRequestConfig } from 'axios';
import * as HDC from '../interfaces/HuntingdonDistrict';

// http://open.huntingdonshire.gov.uk/Help

const axiosConfig: AxiosRequestConfig = {
    headers: {
        api_key: '5efbf806ca6641c0bb36f266956cfe8c'
    },
    params: {
        authority: 'HDC'
    }
};

export default class HuntingdonDistrict {
    async getAddressesByPostcode(postcode: string): Promise<HDC.getAddressesByPostcode.Root> {
        return await (
            await axios.post('https://servicelayer3c.azure-api.net/addresses/search', { postcode }, axiosConfig)
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
