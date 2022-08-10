import { StandardCalculationPolicyRuleENUM } from '../../enums/company';
import { AuditV1DTO } from '../../shared/audit';
import { CalculationPolicyQualifierDTO } from './calculationPolicyQualifier.dto';
import { CalculationPolicyReceiveDTO } from './calculationPolicyReceive.dto';
export declare class CalculationPolicyDetailDTO {
    calculationPolicyDetailId: string;
    name: string;
    description: string;
    order: number;
    standardCalculationPolicyRule: StandardCalculationPolicyRuleENUM;
    calculationPolicyQualifiers: CalculationPolicyQualifierDTO[];
    calculationPolicyReceives: CalculationPolicyReceiveDTO[];
    calculationPolicyId: string;
    isActive: boolean;
    companyId: string;
    effectiveDate: string;
    effectiveDatedRecords: CalculationPolicyDetailDTO[];
    auditData: AuditV1DTO;
}
export interface ICalculationPolicyDetailDTO extends CalculationPolicyDetailDTO {
}
