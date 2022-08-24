import { CompanyV1DTO } from '../company/company';
import { PermissionsENUM } from '../enums/auth';
import { UserDTO } from './user.dto';
export declare class UserIdCompanyIdAccessDTO {
    userId: string;
    company: CompanyV1DTO;
    user: UserDTO;
    permissions: PermissionsENUM[];
}
export interface IUserIdCompanyIdAccessDTO extends UserIdCompanyIdAccessDTO {
}
