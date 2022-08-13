import { CompanyV1DTO } from '../company/company';
import { PermissionsENUM } from '../enums/auth';

export class UserIdCompanyIdAccessDTO {
    userId: string;
    company: CompanyV1DTO;
    permissions: PermissionsENUM[];
}

export interface IUserIdCompanyIdAccessDTO extends UserIdCompanyIdAccessDTO {}
