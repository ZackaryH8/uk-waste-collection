import axios from 'axios';
import * as PCC from '../interfaces/PeterboroughCity';

const axiosConfig = {
    headers: {
        Accept: 'application/json',
        'cache-control': 'no-cache'
    }
};

export default class PeterboroughCity {
    /**
     * Get a list of addresses from a postcode
     * @param postcode Postcode to get addresses for
     * @returns An array of addresses
     */
    async getAddressesByPostcode(postcode: string): Promise<PCC.getAddressesByPostcode.Root> {
        return await (
            await axios.get(`https://www.peterborough.gov.uk/api/addresses/${postcode}`, axiosConfig)
        ).data;
    }

    /**
     * Get all jobs for the UPRN
     * @param UPRN Unique propert reference number, get from getAddressesByPostcode
     * @param startDate Filter jobs by date `YYYY-M-DD`, default: current date.
     * @param endDate Filter jobs by date `YYYY-M-DD`, default: 12 days from current date.
     * @returns
     */
    async getJobsForUPRN(UPRN: string, startDate: Date, endDate: Date): Promise<PCC.getJobsForUPRN.Root> {
        return await (
            await axios.get(`https://www.peterborough.gov.uk/api/jobs/${startDate}/${endDate}/${UPRN}`, axiosConfig)
        ).data;
    }
}
