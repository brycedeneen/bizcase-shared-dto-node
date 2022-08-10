import { UpdatePersonV1DTO } from '../../shared/person';
export declare class UpdateEmployeeDTO {
    employeeNumber: string;
    badgeNumber: string;
    calculationPolicyId: string;
    payrollPeriodId: string;
    isTestEmployee: boolean;
    person: UpdatePersonV1DTO;
    effectiveDate: string;
}
export interface IUpdateEmployeeDTO extends UpdateEmployeeDTO {
}
