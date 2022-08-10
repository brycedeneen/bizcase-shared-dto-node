import { RegisterUserV1DTO } from '../../auth';
export declare class CreateCompanyDTO {
    name: string;
    primaryUser: RegisterUserV1DTO;
}
export interface ICreateCompanyDTO extends CreateCompanyDTO {
}
