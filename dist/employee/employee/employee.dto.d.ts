import { PersonV1DTO } from '../../shared/person';
export declare class EmployeeDTO {
    employeeId: string;
    employeeNumber: string;
    badgeNumber: string;
    calculationPolicyId: string;
    payrollPeriodId: string;
    companyId: string;
    userId: string;
    personId: string;
    person: PersonV1DTO;
    isTestEmployee: boolean;
    isActive: boolean;
    effectiveDate: string;
    effectiveDatedRecords: EmployeeDTO[];
}
export interface IEmployeeDTO extends EmployeeDTO {
}
