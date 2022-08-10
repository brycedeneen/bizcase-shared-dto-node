import { PayrollPeriodENUM } from '../../enums/company/payrollPeriod.enum';
import { AuditV1DTO } from '../../shared/audit';
export declare class PayrollPeriodDTO {
    payrollPeriodId: string;
    name: string;
    description: string;
    payPeriodType: PayrollPeriodENUM;
    startDate: string;
    date2: string;
    averageDaysPerPeriod: number;
    isActive: boolean;
    companyId: string;
    effectiveDate: string;
    effectiveDatedRecords: PayrollPeriodDTO[];
    auditData: AuditV1DTO;
}
export interface IPayrollPeriodDTO extends PayrollPeriodDTO {
}
