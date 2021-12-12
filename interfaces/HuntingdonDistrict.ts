export declare module getAddressesByPostcode {
    interface Address {
        summaryline: string;
        buildingname?: any;
        premise: string;
        street: string;
        posttown: string;
        postcode: string;
        uprn: string;
        moreValues: boolean;
        nextPage: number;
    }

    export interface Root {
        Response: number;
        Success: boolean;
        Addresses: Address[];
    }
}
