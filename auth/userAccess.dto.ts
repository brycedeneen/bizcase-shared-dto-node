import { EmployeeIdCompanyIdAccessDTO } from './employeeIdCompanyIdAccess.dto';

export class UserAccessDTO {
    userId: string;
    employeeIdCompanyIdAccess: EmployeeIdCompanyIdAccessDTO[];
}

export interface IUserAccessDTO extends UserAccessDTO {}
