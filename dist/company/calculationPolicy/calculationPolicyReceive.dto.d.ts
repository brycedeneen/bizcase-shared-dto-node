import { ReceiveActionTypeENUM } from '../../enums/calculation';
import { HoursOrDollarsTypeCode } from '../../enums/company';
import { AuditV1DTO } from '../../shared/audit';
export declare class CalculationPolicyReceiveDTO {
    calculationPolicyReceiveId: string;
    receiveAction: ReceiveActionTypeENUM;
    payrollCodeId: string;
    amount: number;
    unit: HoursOrDollarsTypeCode;
    order: number;
    calculationPolicyDetailId: string;
    calculationPolicyId: string;
    isActive: boolean;
    companyId: string;
    effectiveDate: string;
    effectiveDatedRecords: CalculationPolicyReceiveDTO[];
    auditData: AuditV1DTO;
}
export interface ICalculationPolicyReceiveDTO extends CalculationPolicyReceiveDTO {
}
