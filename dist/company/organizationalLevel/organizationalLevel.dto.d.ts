export declare class OrganizationLevelDTO {
    organizationLevelId: string;
    name: string;
    description: string;
    level: number;
    isSystem: boolean;
    isActive: boolean;
    validateValues: boolean;
    companyId: string;
}
export interface IOrganizationLevelDTO extends OrganizationLevelDTO {
}
