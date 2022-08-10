import { EmployeeIdCompanyIdAccessDTO } from './employeeIdCompanyIdAccess.dto';
export declare class UserAccessDTO {
    userId: string;
    employeeIdCompanyIdAccess: EmployeeIdCompanyIdAccessDTO[];
}
export interface IUserAccessDTO extends UserAccessDTO {
}
