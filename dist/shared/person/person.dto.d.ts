export declare class PersonDTO {
    personId: string;
    name: string;
    isActive: boolean;
    effectiveDate: string;
    effectiveDatedRecords: PersonDTO[];
}
export interface IPersonDTO extends PersonDTO {
}
