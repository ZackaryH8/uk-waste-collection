export declare module getAddressesByPostcode {
    export interface Address {
        id: string;
        houseNumber: string;
        street: string;
        town: string;
        postCode: string;
    }
}

export declare module getCollectionsByUPRN {
    export interface Collection {
        date: Date;
        roundTypes: string[];
        slippedCollection: boolean;
    }

    export interface Container {
        type: string;
        isAssisted: boolean;
        capacity: number;
        binSackTotal: number;
        isBinStore: boolean;
    }

    export interface Root {
        collections: Collection[];
        roundTypes: string[];
        isBinStore: boolean;
        events: any[];
        containers: Container[];
    }
}
