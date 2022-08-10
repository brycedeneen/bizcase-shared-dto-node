import { HoursOrDollarsTypeCode } from '../../enums/company/hoursOrDollarsTypeCode.enum';
import { PayrollCodeTypeENUM } from '../../enums/company/payrollCodeType.enum';
import { AuditV1DTO } from '../../shared/audit';
export declare class PayrollCodeDTO {
    payrollCodeId: string;
    name: string;
    description: string;
    payrollCodeType: PayrollCodeTypeENUM;
    hoursOrDollars: HoursOrDollarsTypeCode;
    payRateMultiplier: number;
    includeInOvertimeCalculation: boolean;
    isWorkedPayType: boolean;
    calculationPriority: number;
    isActive: boolean;
    companyId: string;
    effectiveDate: string;
    effectiveDatedRecords: PayrollCodeDTO[];
    auditData: AuditV1DTO;
}
export interface IPayrollCodeDTO extends PayrollCodeDTO {
}
