export declare module getAddressesByPostcode {
    export interface Address {
        address1: string;
        address2: string;
        street: string;
        locality: string;
        town: string;
        postCode: string;
    }

    export interface RecordStamp {
        addedBy: string;
        dateAdded: Date;
        comments?: any;
    }

    export interface Ward {
        id: number;
        wardCode: string;
        name: string;
        recordStamp: RecordStamp;
    }

    export interface Bng {
        easting: number;
        northing: number;
    }

    export interface Metric {
        latitude: number;
        longitude: number;
    }

    export interface Location {
        bng: Bng;
        metric: Metric;
    }

    export interface RecordStamp2 {
        addedBy: string;
        dateAdded: Date;
        comments?: any;
    }

    export interface Property {
        uprn: string;
        usrn: number;
        address: Address;
        userLabel: string;
        ward: Ward;
        parish?: string;
        location: Location;
        recordStamp: RecordStamp2;
    }

    export interface Root {
        recordCount: number;
        Propertyes: Property[];
    }
}

export declare module getJobsForUPRN {
    export interface JobsFeatureScheduleDate {
        jobID: number;
        jobName: string;
        jobDescription: string;
        jobStatus: string;
        previousDate: Date;
        nextDate: Date;
        rescheduledDate: Date;
        rescheduledDateSpecified: boolean;
        rescheduledReason: string;
        uprn: any;
        usrn: number;
        address1: string;
        address2: string;
        street: string;
        locality: string;
        town: string;
        postCode: string;
        easting: number;
        northing: number;
        longitude: number;
        latitude: number;
    }

    export interface Root {
        recordCount: number;
        jobs_FeatureScheduleDates: JobsFeatureScheduleDate[];
    }
}
