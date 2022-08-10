import { CompanyV1DTO } from '../company/company';

export class EmployeeIdCompanyIdAccessDTO {
    employeeId: string;
    companyId: string;
    company: CompanyV1DTO;
}

export interface IEmployeeIdCompanyIdAccessDTO
    extends EmployeeIdCompanyIdAccessDTO {}
