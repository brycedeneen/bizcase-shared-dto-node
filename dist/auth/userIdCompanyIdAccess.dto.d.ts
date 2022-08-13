import { CompanyV1DTO } from '../company/company';
import { PermissionsENUM } from '../enums/auth';
export declare class UserIdCompanyIdAccessDTO {
    userId: string;
    companyId: string;
    company: CompanyV1DTO;
    permissions: PermissionsENUM[];
}
export interface IUserIdCompanyIdAccessDTO extends UserIdCompanyIdAccessDTO {
}
