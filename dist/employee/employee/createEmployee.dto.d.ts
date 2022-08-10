import { CreatePersonV1DTO } from '../../shared/person';
export declare class CreateEmployeeDTO {
    employeeNumber: string;
    badgeNumber: string;
    calculationPolicyId: string;
    payrollPeriodId: string;
    person: CreatePersonV1DTO;
    isTestEmployee: boolean;
    effectiveDate: string;
}
export interface ICreateEmployeeDTO extends CreateEmployeeDTO {
}
