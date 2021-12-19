import axios, { AxiosRequestConfig } from 'axios';
import { URLSearchParams } from 'url';
import * as cheerio from 'cheerio';
import * as BC from '../interfaces/Bolton';
import { toTitleCase } from './helpers/string';

const axiosConfig: AxiosRequestConfig = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

export default class Bolton {
    /**
     * Get a list of addresses from a postcode
     * @param postcode The postcode which you want to get addresses for
     * @returns An array of addresses
     */
    async getAddressesByPostcode(postcode: string): Promise<BC.getAddressesByPostcode.Address[]> {
        const response = await (await axios.post('https://www.bolton.gov.uk/next-bin-collection', new URLSearchParams({ postcode, addressLookup: 'Submit' }).toString(), axiosConfig)).data;
        const addressesDOM = Array.from(cheerio.load(response)('#uprn').children());
        const addresses = [];

        for (let i = 1; i < addressesDOM.length; i++) {
            const address = addressesDOM[i].attribs.value.split(/\||, /g);

            addresses.push({
                premise: address[1]?.split(' ')[0],
                street: toTitleCase(address[1]),
                town: toTitleCase(address[2]),
                postcode: address[3],
                uprn: address[0]
            });
        }
        return addresses;
    }
}
