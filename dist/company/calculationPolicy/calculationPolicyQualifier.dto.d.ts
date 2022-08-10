import { QualifierTypeENUM } from '../../enums/calculation';
import { AuditV1DTO } from '../../shared/audit';
export declare class CalculationPolicyQualifierDTO {
    calculationPolicyQualifierId: string;
    qualifierType: QualifierTypeENUM;
    qualifierValue: number;
    order: number;
    calculationPolicyDetailId: string;
    calculationPolicyId: string;
    isActive: boolean;
    companyId: string;
    effectiveDate: string;
    effectiveDatedRecords: CalculationPolicyQualifierDTO[];
    auditData: AuditV1DTO;
}
export interface ICalculationPolicyQualifierDTO extends CalculationPolicyQualifierDTO {
}
