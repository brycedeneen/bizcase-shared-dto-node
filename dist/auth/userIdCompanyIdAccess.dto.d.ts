import { CompanyV1DTO } from '../company/company';
export declare class UserIdCompanyIdAccessDTO {
    userId: string;
    companyId: string;
    company: CompanyV1DTO;
}
export interface IUserIdCompanyIdAccessDTO extends UserIdCompanyIdAccessDTO {
}
